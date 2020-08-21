import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductItemHeader from './header';
import ProductItemCallToAction from './calltoaction';

const ProductItem = () =>{
    return (
        <View>
            <ProductItemHeader/>
            <ProductItemCallToAction/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FFF',
    }
})

export default ProductItem;