import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import PageHeader from '../components/page/header';
import ApplicationName from '../components/label/applicationname';
import Brands from '../components/brands';

const ScreenPage2 = () =>{
    return(
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <PageHeader menuDrawerColor={'#000'}/>
            <ApplicationName/>
            <Brands/>
        </SafeAreaView>
    )
}

export default ScreenPage2;