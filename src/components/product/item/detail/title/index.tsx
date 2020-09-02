import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../../../common/styles';

const ProductItemDetailTitle = ({text}:{text:string}) => {
    return(
        <View style={styles.productItemDetailTitle}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productItemDetailTitle: {
        marginTop: 60,
    },
    text: {
        ...textStyle,
        fontSize: 15,
        textAlign: 'center',
        color: '#C4C4C4'
    }
})

export default ProductItemDetailTitle;