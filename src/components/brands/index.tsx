import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BrandsHeader from './header';
import BrandsMenu from './menu';
import BrandsModels from './models';
import BrandsNote from './note';

const Brands = () => {
    return(
        <View>
            <BrandsHeader/>
            <BrandsMenu/>
            <BrandsModels/>
            <BrandsNote/>
        </View>
    )
}

export default Brands;