import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductItemHeader from './header';
import ProductItemCallToAction from './calltoaction';
import ProductItemImage from './image';
import ProductItemSpecifications from './specifications';
import { ProductItemSpecificationsItemData, ProductItemSpecificationItemStyle } from './specifications/item';

const ProductItem = () =>{

    const itemData:ProductItemSpecificationsItemData[] = [
        {id: '1', title: '0-40 kmph', detail: '3.9 seconds'},
        {id: '2', title: 'True Range', detail: '45-60 kmph'},
    ]

    const style: ProductItemSpecificationItemStyle = {
        titleColor: '#BDBDC1',
        detailColor: '#000',
        backgroundColor: '#FFF'
    }

    return (
        <View style={styles.productItem}>
            <ProductItemHeader/>
            <ProductItemCallToAction/>
            <ProductItemImage/>
            <ProductItemSpecifications 
                itemData={itemData}
                style={style}/>
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