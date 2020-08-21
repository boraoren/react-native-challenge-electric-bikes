import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../../../common/styles';

interface ProductItemSpecificationsItemProps {
    id: string;
    title: string;
    detail: string;
}

const ProductItemSpecificationsItem = ({
    item
}: {
    item: ProductItemSpecificationsItemProps
}) =>{
    return(
        <View style={styles.productItemSpecificationsItem}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.detail}>{item.detail}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productItemSpecificationsItem:{
        backgroundColor: '#FFF',
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
        color: '#BDBDC1',
        fontSize: 15,
    },
    detail: {
        ...textStyle,
        color: '#000',
        fontSize: 20,
    }
})

export default ProductItemSpecificationsItem;