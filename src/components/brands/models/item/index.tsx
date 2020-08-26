import React from 'react';
import { Text, View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { textStyle } from '../../../../common/styles';

interface ModelsItemProps{
    id: string;
    image: ImageSourcePropType;
    name: string;
    price: string;
    order: number;
}

const ModelsItem = ({item}:{item:ModelsItemProps}) => {
    const isOdd:boolean = !!((item.order) % 2);

    return(
        <View style={styles({isOdd}).modelsItem}>
            <View style={{overflow: 'hidden'}}>
                <Image source={item.image}/>
            </View>
            <Text style={styles({isOdd}).name}>{item.name}</Text>
            <Text style={styles({isOdd}).price}>{item.price}</Text>
        </View>
    )
}

const styles = ({isOdd}:{isOdd:boolean}) => StyleSheet.create({
    modelsItem:{
        backgroundColor: isOdd ? '#FFF' : '#000',
        height: 217,
        width: 108,
        marginBottom: 50,
        marginRight: 25,
        borderRadius: 20,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 20, height: 30},
        shadowOpacity: 0.09,
        shadowRadius: 5,
        elevation: 1,
    },
    name: {
        ...textStyle,
        color: isOdd ? '#000' : '#FFF',
        fontSize: 13,
        alignSelf: 'center'
    },
    price: {
        ...textStyle,
        color: isOdd ? '#BCB8C5' : '#FAE957',
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: -10,

    }
})

export default ModelsItem;