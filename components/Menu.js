import React,{Component} from 'react';
import {View, Text, image, StyleSheet, Image , AsyncStorage} from 'react-360';
import GazeButton from "react-360-gaze-button";



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
        marginTop:50,
        height: 150,
        width:150,
        backgroundColor:'#ffff',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft:70
    },    icon:{
     
        width: 110,
        height: 110,
        marginTop:20
     
      }

})

return (
    <View style={styles.aboutWrapper}>
    <Text style={styles.actorImage}>Entertainment</Text>
   <View style={{ flexDirection: 'row'}}>
   <View style={{flexDirection: 'row',marginLeft:-100,marginTop:20}}>
   <View style={styles.skillWrapper}>
       <GazeButton
           duration={100}
           onClick={() => {
               console.log("asd");
           }}
           render={(remainingTime, isGazed) => (
               <Image style={styles.icon} source={{uri:'./static_assets/music.jpg'}}/>
           )}
       />

   </View>
       <View style={styles.skillWrapper}>
           <GazeButton
               duration={100}
               onClick={() => {
                   AsyncStorage
                       .getItem("asdasd")
                       .then(res => console.log(res));
               }}
               render={(remainingTime, isGazed) => (
                   <Image style={styles.icon} source={{uri:'./static_assets/movie.jpeg'}}/>
               )}
           />

       </View>
       <View style={styles.skillWrapper}>
           <GazeButton
               duration={100}
               onClick={() => {
                   AsyncStorage
                       .setItem('meme', "meme");

               }}
               render={(remainingTime, isGazed) => (
                   <Image style={styles.icon} source={{uri:'./static_assets/9.png'}}/>
               )}
           />

        </View>
   </View>
    
       
   </View>
   </View> 

);
}


}