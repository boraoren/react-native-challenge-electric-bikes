import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const levels = require('./levels.png');
const magnifyGlass = require('./magnifyGlass.png');
const iconThunder = require('./thunder.png');

const PageBottomMenu = () => {
    return(
        <View style={styles.pageBottommenu}>
            <Image source={levels}/>
            <View style={styles.iconCircleThunder}>
                <ImageBackground source={iconThunder} style={styles.iconThunder}/>
            </View>
            <Image source={magnifyGlass}/>
        </View>
    )
}

const styles = StyleSheet.create({
    pageBottommenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 35,
        marginRight: 35,
        alignItems: 'flex-end',
        marginTop: 50,
    },
    iconCircleThunder: {
        backgroundColor: 'black',
        width: 67,
        height: 67,
        borderRadius: 50,
    },
    iconThunder: {
        width: 15,
        height: 27,
        marginLeft: 25,
        marginTop: 22,
    }
})

export default PageBottomMenu;