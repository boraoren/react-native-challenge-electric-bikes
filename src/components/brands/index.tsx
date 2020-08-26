import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BrandsHeader from './header';
import BrandsMenu from './menu';
import BrandsModels from './models';

const Brands = () => {
    return(
        <View>
            <BrandsHeader/>
            <BrandsMenu/>
            <BrandsModels/>
        </View>
    )
}

export default Brands;