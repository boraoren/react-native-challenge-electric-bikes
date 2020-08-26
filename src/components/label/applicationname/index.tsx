import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { textStyle } from '../../../common/styles';

const ApplicationName = () => {
    return(
        <Text style={styles.applicationName}>
            Electric Bikes
        </Text>
    )
}

const styles = StyleSheet.create({
    applicationName: {
        ...textStyle,
        fontSize: 24,
        textAlign: 'center',
        marginTop: 27,
    }
})

export default ApplicationName;