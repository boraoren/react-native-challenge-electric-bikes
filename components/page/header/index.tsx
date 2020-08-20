import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PageHeaderMenu from './menu';

const PageHeader = () =>{
    return(
        <View style={styles.pageHeader}>
            <PageHeaderMenu/>
        </View>
    )
}

const styles = StyleSheet.create({
    pageHeader: {
        flexDirection: 'row',
        marginLeft: 35,
    },
})

export default PageHeader;