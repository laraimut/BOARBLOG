import React from 'react';
import {View, Text, image, StyleSheet, Image} from 'react-360';

const ContactMe =()=>{
    return(
        <View style={styles.aboutWrapper}>
         <Image style={styles.actorImage} source={{uri:'./static_assets/contactmeblue.png'}}/>
        <View style={{ flexDirection: 'row'}}>
            <View style={styles.skillWrapper}>
                <Text style={styles.textItem}>
                    Kushagra305@gmail.com
                    9818011696
                    https://github.com/KushagraGitter
                    https://twitter.com/kush1234
                    https://www.facebook.com/kushagra
                </Text>
            </View>
            
        </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    aboutWrapper: {
        width: 700,
        height: 500,
        backgroundColor:'#ff9800',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 20,
        transform: [
            {translate: [0, 2, -30]}
          ]
    },
    actorImage: {
        marginBottom: 20,
        width: 250,
        height: 50,
    },
    textItem: {
        margin:10,
        fontSize: 40,
        color:'#000',
        marginTop:20
    },
    skillWrapper:{
        margin:15,
        height: 400,
        width:650,
        backgroundColor:'#ffff',
        borderRadius: 20,
        alignItems: 'center'
    }

})

export default ContactMe;