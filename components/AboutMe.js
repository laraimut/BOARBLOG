import React from 'react';
import {View, Text, image, StyleSheet, Image} from 'react-360';

const AboutMe =()=>{
    return(
        <View style={styles.aboutWrapper}>
             <Image style={styles.actorImage} source={{uri:'./static_assets/aboutme.png'}}/>
             <View style={styles.textWrapper}>
             <Text style={styles.textItem}>
               Hello, My Self Kushagra Rajpoot 
               I am passionate web developer, JavaScript is my strong point.
               Apart from coding, I love to travel and try to capture my perspective through my lenses.
               Found a new passion about Augmented Reality

             </Text>
             </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    aboutWrapper: {
        width: 800,
        height: 600,
        backgroundColor:'#673ab7',
        borderRadius: 20
    },
    actorImage: {
        marginBottom: 20,
        width: 250,
        height: 50,
    },
    textWrapper:{
        padding:10
    },
    textItem: {
        fontSize: 40,
        color:'#ffff',
        transform: [
            {translate: [0, 0, 0]}
          ]
    }

})

export default AboutMe;