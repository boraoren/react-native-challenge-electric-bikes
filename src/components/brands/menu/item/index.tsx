import { Text, StyleSheet, View } from "react-native"

import React from 'react';
import { textStyle } from "../../../../common/styles";

interface MenuItemProps {
    id: string;
    title: string;
    selected: boolean;
}

const MenuItem = ({item}:{item:MenuItemProps}) => {
    return(
        <View style={item.selected ? styles.menuItemSelected : styles.menuItem}>
            <Text style={styles.labelItem}>
                {item.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    menuItem:{
        marginRight: 15
    },
    menuItemSelected:{
        marginRight: 15,
        borderBottomWidth: 4,
        height: 40,
    },
    labelItem: {
        ...textStyle,
        fontSize: 13,
    }
})

export default MenuItem;