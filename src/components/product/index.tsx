import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductHeader from './header';
import ProductMenuSelection from './menu/selection';
import ProductItem from './item';

const Product = () => {
    return(
        <View>
            <ProductHeader/>
            <ProductMenuSelection/>
            <ProductItem/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
    }
})

export default Product;