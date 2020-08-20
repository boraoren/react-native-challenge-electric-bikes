import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PageHeaderMenu from './menu';
import PageHeaderUser from './user';

const PageHeader = () =>{
    return(
        <View style={styles.pageHeader}>
            <PageHeaderMenu/>
            <PageHeaderUser/>
        </View>
    )
}

const styles = StyleSheet.create({
    pageHeader: {
        flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35,
    },
})

export default PageHeader;