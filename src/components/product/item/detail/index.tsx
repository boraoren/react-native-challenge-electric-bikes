import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductItemSpecifications from '../specifications';
import { ProductItemSpecificationsItemData, ProductItemSpecificationItemStyle } from '../specifications/item';
import ProductItemDetailQuestion from './question';

const ProductItemDetail = () => {

    const itemData:ProductItemSpecificationsItemData[] = [
        {id: '1', title: 'Top speed', detail: '80 kmph'},
        {id: '2', title: 'Warranty', detail: '3 Yrs'},
    ]

    const style: ProductItemSpecificationItemStyle ={
        titleColor: '#BDBDC1',
        detailColor: '#FFF',
        backgroundColor: '#2E2C2C',
    }

    return(
        <View>
            <ProductItemSpecifications 
                itemData={itemData} 
                style={style}/>
            <ProductItemDetailQuestion
                 text={'How to maximize range?'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FFF'
    }
})

export default ProductItemDetail;