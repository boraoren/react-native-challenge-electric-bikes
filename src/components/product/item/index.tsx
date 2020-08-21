import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductItemHeader from './header';
import ProductItemCallToAction from './calltoaction';
import ProductItemImage from './image';
import ProductItemSpecifications from './specifications';

const ProductItem = () =>{
    return (
        <View>
            <ProductItemHeader/>
            <ProductItemCallToAction/>
            <ProductItemImage/>
            <ProductItemSpecifications/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FFF',
    }
})

export default ProductItem;