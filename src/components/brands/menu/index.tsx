import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MenuItem from './item';

const BrandsMenu = () => {

    const data = [
        {
            id: '1',
            title: 'ATHER ENERGY',
            selected: true,
        },{
            id: '2',
            title: 'NIU',
            selected: false,
        },{
            id: '3',
            title: 'YAMAHA',
            selected: false,
        },{
            id: '4',
            title: 'XIA',
            selected: false,
        }
    ]

    return(
        <View style={styles.brandsMenu}>
            <FlatList
            data={data}
            horizontal
            renderItem={MenuItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    brandsMenu: {
        marginTop: 50,
        paddingLeft: 30,
    }
})

export default BrandsMenu;