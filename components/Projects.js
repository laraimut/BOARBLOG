import React from 'react';
import {View, Text, StyleSheet, Image, VrButton} from 'react-360';


export class Projects extends React.Component{ 
    constructor(props){  
        super(props)
   
    }

    render(){
    return(
        <View style={styles.aboutWrapper}>
         <Image style={styles.actorImage} source={{uri:'./static_assets/projects.png'}}/>
        <View style={{ flexDirection: 'row'}}>
            <View style={styles.skillWrapper}>
                <VrButton>
                    <Text style={styles.textItem}>MicroFocus</Text>
                </VrButton>
            </View>
            <View style={styles.skillWrapper}>
                <VrButton>
                    <Text style={styles.textItem}>OEC Chats</Text>
                </VrButton>
            </View>
        </View>
           
        <View style={{ flexDirection: 'row'}}>
            <View style={styles.skillWrapper}>
                <VrButton>
                    <Text style={styles.textItem}>AT&T</Text>
                </VrButton>
            </View>
            <View style={styles.skillWrapper}>
                <VrButton>
                    <Text style={styles.textItem}>React360</Text>
                </VrButton>
            </View>
        </View>    
        
        <View style={{ flexDirection: 'row'}}>
            <View style={styles.skillWrapper}>
                <VrButton>
                    <Text style={styles.textItem}>AirBus</Text>
                </VrButton>     
            </View>
            <View style={styles.skillWrapper}>
                <VrButton>
                    <Text style={styles.textItem}>Personify</Text>
                </VrButton>    
            </View>
            </View> 
        </View> 
    )
}
}

const styles = StyleSheet.create({
    aboutWrapper: {
        width: 600,
        height: 500,
        backgroundColor:'#357a38',
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
        fontSize: 40,
        color:'#000',
        marginTop:20
    },
    skillWrapper:{
        margin:15,
        height: 100,
        width:250,
        backgroundColor:'#ff9100',
        borderRadius: 20,
        alignItems: 'center'
    }

})

export default Projects;