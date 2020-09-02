import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ProductItemSpecificationsItem, { ProductItemSpecificationsItemData, ProductItemSpecificationItemStyle } from './item';

const ProductItemSpecifications = ({
    itemData,
    style,
}:{
    itemData:ProductItemSpecificationsItemData[];
    style: ProductItemSpecificationItemStyle;
}) => {

    const view = ({item}: {item:any}) => {
        return <ProductItemSpecificationsItem item={item} style={style}/>
    }

    return(
        <View>
            <FlatList data={itemData} 
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