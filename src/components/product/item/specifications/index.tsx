import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const ProductItemSpecifications = () => {

    const data = [
        {id: '1', title: '0-40 kph', detail: '3.9 seconds'},
        {id: '2', title: 'True Range', detail: '35-60 kph'},
    ]

    const view = ({item}: {item:any}) => {
        return <Text style={styles.text}>item.id</Text>
    }

    return(
        <View>
            <FlatList data={data} 
                horizontal
                renderItem={view}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FFF',
    }
})

export default ProductItemSpecifications;