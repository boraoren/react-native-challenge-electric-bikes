import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Product = () => {
    return(
        <View>
            <Text style={styles.text}>
                Product
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
    }
})

export default Product;