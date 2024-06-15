import React, { componet } from 'react'
import { Text, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library';


export class AudioProvider extends Component {
    constructor(props) {
        super(props)
    }

    getPermision = async () => {
        const Permission = await MediaLibrary.getPermissionaAsync()
        console.log(Permission)
    }
    componetDidMount() {
        getPermission()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Text in componet</Text>
                </View>
            </View>
        )
    }
}

export default AudioProvider

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







