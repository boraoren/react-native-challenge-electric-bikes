import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';

const ScreenPage3 = () => {
    return(
        <SafeAreaView style={styles.screenPage3}>
            <StatusBar barStyle="light-content"/>
            <Text style={styles.text}>
                Screen Page 3
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenPage3:{
        flex: 1,
        backgroundColor: '#000'
    },
    text: {
        color: '#FFF'
    }
})

export default ScreenPage3;