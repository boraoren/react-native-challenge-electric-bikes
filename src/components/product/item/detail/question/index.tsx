import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { textStyle } from '../../../../../common/styles';

const ProductItemDetailQuestion = ({text}:{text:string}) => {

    const iconPlug = require('./plug.png');
    
    return(
        <View style={styles.productItemDetailQuestion}>
            <Text style={styles.text}>{text}</Text>
            <Image source={iconPlug}/>
        </View>
    )
}

const styles = StyleSheet.create({
    productItemDetailQuestion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 75,
    },
    text: {
        ...textStyle,
        fontSize: 17,
        color: '#FFF'
    }
})

export default ProductItemDetailQuestion;