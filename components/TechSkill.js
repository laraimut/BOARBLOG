import React from 'react';
import {View, Text, image, StyleSheet, Image} from 'react-360';
import images from "../mock/images";


const a = ["meme1.jpeg" , "memeee.jpg"];
class AboutMe  extends  React.Component{


    render(){
        return(
            <View style={styles.aboutWrapper}>

                <Image style={styles.image} source={{uri:`./static_assets/${a[1]}`}}/>
            </View>
        )
    }

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
    image:{
        width:400,
        height:400
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