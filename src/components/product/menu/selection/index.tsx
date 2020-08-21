import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../../common/styles';


const ProductMenuSelection = () => {
    return(
        <View style={styles().productMenuSelection}>
            <Text style={styles({selected: true})
                .productMenuSelectionItem}>Test ride
            </Text>
            <Text style={styles({selected: false})
                .productMenuSelectionItem}>Charging
            </Text>
        </View>
    )
}

interface StylesProps {
    selected: boolean;
}

const styles = (props?: StylesProps) => StyleSheet.create({
    productMenuSelection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
    },
    productMenuSelectionItem: {
        ...textStyle,
        color: props?.selected ? '#FAE957' : '#FFF',
        fontSize: 17,
        lineHeight: 60,
    }
})

export default ProductMenuSelection;