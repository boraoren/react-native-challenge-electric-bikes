import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../../common/styles';

const ProductItemCallToAction = () =>{
    return(
        <View style={styles.productItemCallToAction}>
            <Text style={styles.preorder}>
                Pre-order
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productItemCallToAction: {
        backgroundColor: '#F8E029',
        width: 140,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        paddingTop: 7,
        paddingBottom: 7,
        marginTop: 28,
    },
    preorder: {
        ...textStyle,
        fontSize: 17,
        alignSelf: 'center',
        
    }
})

export default ProductItemCallToAction;