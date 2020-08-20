import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import PageHeader from '../../components/page/header';

const ScreenPage1 = () => {
    return(
        <SafeAreaView style={styles.screenPage1}>
            <PageHeader/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenPage1: {
        flex: 1,
        backgroundColor: '#000',
    },
})

export default ScreenPage1;