import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../common/styles';

const ProductHeader = () => {
    return(
        <View>
            <Text style={styles.modelName}>
                Model 450
            </Text>
            <Text style={styles.modelType}>
                ELECTRIC BIKES
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    modelName: {
        ...textStyle,
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    },
    modelType: {
        ...textStyle,
        color: '#AEAEA9',
        fontSize: 13,
        textAlign: 'center'
    }
})

export default ProductHeader;