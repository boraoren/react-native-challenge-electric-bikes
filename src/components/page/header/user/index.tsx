import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from './avatar';

const PageHeaderUser = () => {
    return(
        <View>
            <Avatar/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
    }
})

export default PageHeaderUser;