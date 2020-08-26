import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PageHeaderProps } from '..';

const PageHeaderMenu: React.FC<PageHeaderProps> = (pageHeaderProps) => {
    return(
        <View style={styles().menu}>
            <Text style={styles(pageHeaderProps).text}>__</Text>
            <Text style={styles(pageHeaderProps).text}>__</Text>
            <Text style={styles(pageHeaderProps).text}>__</Text>
        </View>
    )
}

const styles = (pageHeaderProps?: PageHeaderProps) => StyleSheet.create({
    menu: {
        flex: 1,
    },
    text: {
        color: pageHeaderProps?.menuDrawerColor,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: -45,
    }
})

export default PageHeaderMenu;