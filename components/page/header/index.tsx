import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PageHeader = () =>{
    return(
        <View>
            <Text style={styles.text}>
                Page Header
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pageHeader: {
        flexDirection: 'row',
    },
    text: {
        color: '#fff',
    }
})

export default PageHeader;