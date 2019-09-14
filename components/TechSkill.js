import React from 'react';
import {View, Text, image, StyleSheet, Image} from 'react-360';

const AboutMe =()=>{
    return(
        <View style={styles.aboutWrapper}>
         <Image style={styles.actorImage} source={{uri:'./static_assets/techskillspink.png'}}/>
        <View style={{ flexDirection: 'row'}}>
            <View style={styles.skillWrapper}>
                <Text style={styles.textItem}>ReactJS</Text>
            </View>
            <View style={styles.skillWrapper}>
                <Text style={styles.textItem}>JavaScript</Text>
            </View>
            
        </View>
           
        <View style={{ flexDirection: 'row'}}>
            <View style={styles.skillWrapper}>
             <Text style={styles.textItem}>HTML5</Text>
            </View>
            <View style={styles.skillWrapper}>
             <Text style={styles.textItem}>CSS</Text>
            </View>
           
        </View>    
        
        <View style={{ flexDirection: 'row'}}>
        <View style={styles.skillWrapper}>
             <Text style={styles.textItem}>AngularJS</Text>
            </View>
            <View style={styles.skillWrapper}>
                <Text style={styles.textItem}>NodeJS</Text>
            </View>
          
        </View>    
        </View> 
    )
}

const styles = StyleSheet.create({
    aboutWrapper: {
        width: 600,
        height: 500,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        flexDirection: 'column',
        alignItems: 'center'
    },
    actorImage: {
        marginBottom: 20,
        width: 250,
        height: 50,
    },
    textItem: {
        fontSize: 40,
        color:'#ffff',
        marginTop:20
    },
    skillWrapper:{
        margin:15,
        height: 100,
        width:250,
        backgroundColor:'#f73378',
        borderRadius: 20,
        alignItems: 'center'
    }

})

export default AboutMe;