import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Avatar = () => {
    return(
       <Image
       source={{uri: 'https://www.w3schools.com/howto/img_avatar2.png'}} 
       style={styles.avatar}
       />
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
    }
})

export default Avatar;