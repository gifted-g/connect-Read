import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default AboutScreen = () => {
    return (
        <view style={StyleSheet.about}>
            <Text>AboutScreen</Text>
        </view>
    );
}

const styles = StyleSheet.create({
    about: {
        flrx: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'blue'
    },
});