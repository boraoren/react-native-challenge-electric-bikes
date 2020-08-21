import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ProductItemSpecificationsItem from './item';

const ProductItemSpecifications = () => {

    const data = [
        {id: '1', title: '0-40 kph', detail: '3.9 seconds'},
        {id: '2', title: 'True Range', detail: '35-60 kph'},
    ]

    const view = ({item}: {item:any}) => {
        return <ProductItemSpecificationsItem item={item}/>
    }

    return(
        <View>
            <FlatList data={data} 
                horizontal
                renderItem={view}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FFF',
    }
})

export default ProductItemSpecifications;