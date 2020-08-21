import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductItem = () =>{
    return (
        <View>
            <Text style={styles.text}>
                Product Item
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FFF',
    }
})

export default ProductItem;