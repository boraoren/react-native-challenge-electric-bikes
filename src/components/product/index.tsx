import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductHeader from './header';

const Product = () => {
    return(
        <View>
            <ProductHeader/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
    }
})

export default Product;