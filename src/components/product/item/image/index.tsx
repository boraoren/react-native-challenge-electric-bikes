import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ProductItemImage = () => {
    return(
        <Image
        style={styles.productItemImage}
        source={require('./motorcycle.png')}
        />
    )
}

const styles = StyleSheet.create({
    productItemImage: {
        alignSelf: 'center',
    }
})

export default ProductItemImage;