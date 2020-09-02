import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../../../common/styles';

export interface ProductItemSpecificationsItemData{
    id:string;
    title:string;
    detail:string;
}

export interface ProductItemSpecificationItemStyle{
    titleColor: string;
    detailColor: string;
    backgroundColor: string;
}

const ProductItemSpecificationsItem = ({
    item,
    style,
}: {
    item: ProductItemSpecificationsItemData;
    style: ProductItemSpecificationItemStyle;
}) =>{
    return(
        <View style={styles(style).productItemSpecificationsItem}>
            <View>
                <Text style={styles(style).title}>{item.title}</Text>
                <Text style={styles(style).detail}>{item.detail}</Text>
            </View>
        </View>
    )
}

const styles = (style?: ProductItemSpecificationItemStyle) => StyleSheet.create({
    productItemSpecificationsItem:{
        backgroundColor: style?.backgroundColor,
        width: 154,
        height: 92,
        marginBottom: 25,
        borderRadius: 5,
        marginLeft:20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
    },
    title: {
        ...textStyle,
        color: style?.titleColor,
        fontSize: 15,
    },
    detail: {
        ...textStyle,
        color: style?.detailColor,
        fontSize: 20,
    }
})

export default ProductItemSpecificationsItem;