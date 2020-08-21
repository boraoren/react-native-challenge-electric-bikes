import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductItemHeader from './header';
import ProductItemCallToAction from './calltoaction';
import ProductItemImage from './image';
import ProductItemSpecifications from './specifications';

const ProductItem = () =>{
    return (
        <View style={styles.productItem}>
            <ProductItemHeader/>
            <ProductItemCallToAction/>
            <ProductItemImage/>
            <ProductItemSpecifications/>
        </View>
    )
}

const styles = StyleSheet.create({
    productItem: {
        backgroundColor: '#F3F3F3',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 30,
    }
})

export default ProductItem;