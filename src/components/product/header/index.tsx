import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../common/styles';
import {SvgCss} from 'react-native-svg';
import { xml } from './thunderIcon';

const ProductHeader = () => {
    return(
        <View>
            <SvgCss xml={xml} style={styles.thunderIcon}/>
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
    thunderIcon: {
        position: 'absolute',
        alignSelf: 'center',
        width: "63",
        height: "112",
    },
    modelName: {
        ...textStyle,
        lineHeight: 65,
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