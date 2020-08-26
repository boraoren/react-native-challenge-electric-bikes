import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PageHeaderMenu from './menu';
import PageHeaderUser from './user';

export interface PageHeaderProps {
    menuDrawerColor: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({menuDrawerColor}) =>{
    return(
        <View style={styles.pageHeader}>
            <PageHeaderMenu menuDrawerColor={menuDrawerColor}/>
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