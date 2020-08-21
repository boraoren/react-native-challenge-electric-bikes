import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../../common/styles';

const ProductItemHeader = () => {
    return(
        <View>
            <Text style={styles.priceTitle}>
                On-road price
            </Text>
            <Text style={styles.price}>
                $5,400
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    priceTitle: {
        ...textStyle,
        color: '#BDBDC1',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 60,
    },
    price: {
        ...textStyle,
        color: '#FFF',
        fontSize: 40,
        textAlign: 'center',
        
    }
})

export default ProductItemHeader;