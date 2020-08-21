import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductItemHeader from './header';

const ProductItem = () =>{
    return (
        <View>
            <ProductItemHeader/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FFF',
    }
})

export default ProductItem;