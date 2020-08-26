import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BrandsHeader from './header';
import BrandsMenu from './menu';

const Brands = () => {
    return(
        <View>
            <BrandsHeader/>
            <BrandsMenu/>
        </View>
    )
}

export default Brands;