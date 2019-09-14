import React,{Component} from 'react';
import {View, Text, image, StyleSheet, Image} from 'react-360';




export default class Menu extends Component { 
render() {    const styles = StyleSheet.create({
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
     
    fontSize:100
    },
    textItem: {
        margin:10,
        fontSize: 40,
        color:'#000',
        marginTop:20
    },
    skillWrapper:{
        margin:15,
        height: 300,
        width:650,
        backgroundColor:'#ffff',
        borderRadius: 20,
        alignItems: 'center'
    }

})

return (
    <View style={styles.aboutWrapper}>
    <Text style={styles.actorImage}>Entertainment</Text>
   <View style={{ flexDirection: 'row'}}>
   <View style={{flexDirection: 'row',marginLeft:-100,marginTop:20}}>
   <View style={styles.skillWrapper}>
           
       
                  <Image style={styles.icon} source={{uri:'./static_assets/music.jpg'}}/>
                  </View>
                  <View style={styles.skillWrapper}>
                  <Image style={styles.icon} source={{uri:'./static_assets/movie.jpeg'}}/>
                  </View>
                  <View style={styles.skillWrapper}>
                  <Image style={styles.icon} source={{uri:'./static_assets/9.png'}}/>
</View>
                </View>
    
       
   </View>
   </View> 

);
}


}