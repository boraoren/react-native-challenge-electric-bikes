import React from 'react';
import { View,Text, StyleSheet, Image } from 'react-native';
import Tag, {TagData} from '../../../../../tag';

const ProductItemDetailImageWithTags = () =>{

    const imageMotor = require('./imageMotor.png');

    const tagsData: TagData[] = [
        {id: 1, description: 'Tag 1 Description', left: 50, top: 10},
        {id: 2, description: 'Tag 2 Description', left: 50, top: 100},
        {id: 3, description: 'Tag 3 Description', left: 270, top: 90},
        {id: 4, description: 'Tag 4 Description', left: 150, top: 200},
    ]

    return(
        <View style={styles.productItemDetailImageWithTags}>
            <Image source={imageMotor}/>
            {tagsData.map((data)=>(
                <Tag key={data.id} 
                    id={data.id}
                    description={data.description}
                    top={data.top}
                    left={data.left}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    productItemDetailImageWithTags:{
        alignSelf: 'center',
        marginTop: 40,
    },
    text: {
        color: '#FFF'
    }
})


export default ProductItemDetailImageWithTags;