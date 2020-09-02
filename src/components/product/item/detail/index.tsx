import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductItemDetail = () => {
    return(
        <View>
            <Text style={styles.text}>
                Product Item Detail
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FFF'
    }
})

export default ProductItemDetail;