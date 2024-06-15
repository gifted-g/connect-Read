import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [name, setName] = useState('APHEK');
  const [job, setJob] = useState('software developer');
  const [person, setPerson] = useState({ name: 'Aphek', age: 20 });


  const clickHandler = () => {
    setName('ConnectRead');
    setPerson({ name: 'Anna', age: 21 });

  }


  return (
    // login page
    <View style={styles.container}>
      <view style={styles.header}>
        <Text>
          Hello!!
        </Text>
        <Text style={styles.boldText}>
          Sign in to your Account
        </Text>
      </view>
      <view style={styles.body}>
        <Text>
          Enter username:
        </Text>
        <TextInput
          //multiline
          style={styles.input}
          placeholder='e.g. Aphek' />
        <Text>
          Enter age:
        </Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g. 21' />
        <Text>Password</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g. 88'
          onChangeText={(val) => setAge(val)} />

        <Text>
          ConnectReads
        </Text>

        <Text>
          My name is  {name}
        </Text>

        <Text>
          His name is{person.name} and his age is {person.age}
        </Text>
        <view style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler} />
        </view>
      </view>
      <StatusBar style="auto" />
    </View>
  );
}
// style color
// #ffffff
//#OAOO19
//#FAFFEB
//#DOFF61
//#38O1
//#007fff

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }},
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Componet{
  render() {
    return <AppNavigator />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderwidth: 1,
    bordercolor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
