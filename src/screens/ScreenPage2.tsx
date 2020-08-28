import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ImageBackground, StyleSheet } from 'react-native';
import PageHeader from '../components/page/header';
import ApplicationName from '../components/label/applicationname';
import Brands from '../components/brands';
import PageBottomMenu from '../components/page/bottom/menu';

const ScreenPage2 = () =>{

    const screenPage2BackgroundImage = 
        require('./screenPage2Background.png');

    return(
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <ImageBackground
                source={screenPage2BackgroundImage}
                style={styles.screenPage2BackgroundImage}
            />
            <PageHeader menuDrawerColor={'#000'}/>
            <ApplicationName/>
            <Brands/>
            <PageBottomMenu/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenPage2BackgroundImage: {
        width: '100%',
        height: 600,
        position: 'absolute',
    }
})

export default ScreenPage2;