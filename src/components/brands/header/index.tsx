import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../common/styles';

const BrandsHeader = () => {
    return(
        <View style={styles.brandsHeader}>
            <Text style={styles.labelTitle}>
                Brands
            </Text>
            <Text style={styles.labelTotalNumberOfProducts}>
                14 PRODUCTS
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    brandsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 128,
    },
    labelTitle: {
        ...textStyle,
        fontSize: 20,
    },
    labelTotalNumberOfProducts: {
        ...textStyle,
        fontSize: 13,
        color: '#AEAEA9',
        paddingTop: 6,
    }
})

export default BrandsHeader;