import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PageHeaderMenu = () => {
    return(
        <View style={styles.menu}>
            <Text style={styles.text}>__</Text>
            <Text style={styles.text}>__</Text>
            <Text style={styles.text}>__</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
    },
    text: {
        color: '#FAE957',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: -45,
    }
})

export default PageHeaderMenu;