import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';
import PageHeader from '../components/page/header';
import ProductItemDetail from '../components/product/item/detail';

const ScreenPage3 = () => {
    return(
        <SafeAreaView style={styles.screenPage3}>
            <StatusBar barStyle="light-content"/>
            <PageHeader menuDrawerColor={'#FAE957'}/>
            <ProductItemDetail/>
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