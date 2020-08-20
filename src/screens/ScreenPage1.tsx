import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const ScreenPage1 = () => {
    return(
        <SafeAreaView style={styles.screenPage1}>
            <Text style={styles.text}>
                Screen Page 1
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenPage1: {
        flex: 1,
        backgroundColor: '#000',
    },
    text: {
        color: '#fff',
    }
})

export default ScreenPage1;