import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import PageHeader from '../components/page/header';
import Product from '../components/product';

const ScreenPage1 = () => {
    return(
        <SafeAreaView style={styles.screenPage1}>
            <StatusBar barStyle="light-content"/>
            <PageHeader/>
            <Product/>
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