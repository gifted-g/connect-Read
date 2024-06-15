import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.componet{
    static navigationsOptions = {
        title: 'Welcome',
    };
  //  static navigationsOptions = {
   //     title: 'House Share',
    //};

    render() {
        const { navigate } = this.props.navigation;
        return (
            <view style={StyleSheet.home}>
                <Text>Home Screen</Text>
                <Button
                    title="Go About Page"
                    onPress={() =>
                        navigate('About')
                    }
                    
                    />
                    </view>
        );
    }
}


const styles = styleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        container: {
            flex: 1,
            flexDirection: 'column'
        },
        topBox: {
            flex: 2,
            backgroundColor: '#CCE5FF'
    
        },
        bottomBox: {
            flex: 1,
            backgroundColor: '#FFFFCC'
        },
    
        static navigationsOptions = {
            title: 'House Share',
        },
        static navigationsOptions = {
            title: 'House Share',
        },
        //render() {
          //  const { navigate } = this.props.navigation;
            //return (
             //   <View style={styles.container} >
                /*    <View style={styles.topBox} />
              //      <View style={styles.bottomBox} />
                </View>
            );
        }
    }
}
        
*/

    


