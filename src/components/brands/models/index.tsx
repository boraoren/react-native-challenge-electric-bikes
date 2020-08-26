import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface ModelsItemProps{
    id: string;
    image: string;
    name: string;
    price: string;
}

const ModelsItem = ({item}:{item:ModelsItemProps}) => {
    return(
        <Text>{item.id}</Text>
    )
}

const BrandsModels = () => {

    const data = [
        {
            id: '1',
            image: '',
            name: 'MODEL 340',
            price: '$5,550'
        },{
            id: '2',
            image: '',
            name: 'MODEL 450',
            price: '$5,400'
        },{
            id: '3',
            image: '',
            name: 'MODEL 120',
            price: '$4,600'
        }
        
    ]

    return(
        <View>
            <FlatList
            data={data}
            renderItem={ModelsItem}
            horizontal
            />
        </View>
    )
}

export default BrandsModels;