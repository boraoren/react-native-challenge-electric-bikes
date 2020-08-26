import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import PageHeader from '../components/page/header';
import ApplicationName from '../components/label/applicationname';
import Brands from '../components/brands';
import PageBottomMenu from '../components/page/bottom/menu';

const ScreenPage2 = () =>{
    return(
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <PageHeader menuDrawerColor={'#000'}/>
            <ApplicationName/>
            <Brands/>
            <PageBottomMenu/>
        </SafeAreaView>
    )
}

export default ScreenPage2;