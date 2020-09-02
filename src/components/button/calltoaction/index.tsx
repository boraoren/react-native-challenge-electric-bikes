import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { textStyle } from '../../../common/styles';

const ButtonCallToAction = ({text}:{text:string}) => {

    const iconChronometer = require('./chronometer.png');

    return(
        <View style={styles.buttonCallToAction}>
            <Image source={iconChronometer}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonCallToAction: {
        backgroundColor: '#FAE957',
        height: 65, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: 60,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'row',
        
    },
    text: {
        ...textStyle,
        fontSize: 16,
        paddingLeft: 7,
    }
})

export default ButtonCallToAction;