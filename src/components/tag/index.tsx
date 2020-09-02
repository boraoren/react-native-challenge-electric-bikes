import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textStyle } from '../../common/styles';

export interface TagData{
    id: number;
    description: string;
    left: number; 
    top: number;
}


const Tag: React.FC<TagData> = (data) => {
    return(
        <View style={styles(data).tag}>
            <Text style={styles(data).icon}>
                +
            </Text>
        </View>
    )
}

const styles = (data: TagData) => StyleSheet.create({
    tag: {
        position: 'absolute',
        backgroundColor: '#FAE957',
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: data.left,
        marginTop: data.top,

    },
    icon: {
        ...textStyle,
        fontSize: 25,
        textAlign: 'center',
    }
})

export default Tag;