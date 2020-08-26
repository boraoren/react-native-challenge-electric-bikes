import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../common/styles';

const BrandsNote = () => {
    return(
        <View style={styles.brandsNote}>
            <Text style={styles.text}>
                Lowest Price Guarantee
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    brandsNote: {
        backgroundColor: '#F3F3F3',
        alignSelf: 'center',
        width: 240,
        borderRadius: 100,
    },
    text:{
        ...textStyle,
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 6,
        marginBottom: 6,
    }
})

export default BrandsNote;