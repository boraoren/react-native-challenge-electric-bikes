import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ModelsItem from './item';

const BrandsModels = () => {

    const data = [
        {
            id: 'A1',
            image: require('./modelImage-1.png'),
            name: 'MODEL 340',
            price: '$5,550',
            order: 1,
        },{
            id: 'A2',
            image: require('./modelImage-2.png'),
            name: 'MODEL 450',
            price: '$5,400',
            order: 2,
        },{
            id: 'A3',
            image: require('./modelImage-3.png'),
            name: 'MODEL 120',
            price: '$4,600',
            order: 3,
        }
        
    ]

    return(
        <View style={styles.brandsModel}>
            <FlatList
            data={data}
            renderItem={ModelsItem}
            horizontal
            />
        </View>
    )
}

const styles = StyleSheet.create({
    brandsModel: {
        marginLeft: 36,
        marginTop: 36,
    }
})

export default BrandsModels;