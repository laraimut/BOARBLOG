import React from 'react';
import {View, Text, StyleSheet, Image,VrButton, asset } from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

class MainMenu extends React.Component{
    render(){
        return(
            <View style={styles.menuWrapper}>
            <VrButton>
                <Image style={styles.menuItem} source={{uri:'./static_assets/aboutme.png'}}/>
            </VrButton>
            <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 0, 6]}]}}
        />
            <Entity style={styles.entityStyle}
            lit={true}
            source={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl'),
                }}/>
           
            <Image style={styles.menuItem} source={{uri:'./static_assets/projectsgreen.png'}}/>
            <Image style={styles.menuItem} source={{uri:'./static_assets/techskillspink.png'}}/>
            <Image style={styles.menuItem} source={{uri:'./static_assets/contactmeblue.png'}}/>
            <Image style={styles.menuItem} source={{uri:'./static_assets/contactmeyellow.png'}}/>
            <Text style={styles.textItem}> Hello Neon </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuWrapper: {
        width: 300,
        height: 600,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 20,
    },
    menuItem: {
        marginBottom: 20,
        width: 250,
        height: 50,
    },
    bulb: {
        marginBottom: 20,
        width: 20,
        height: 20,
    },
    textItem: {
        fontSize: 60,
        fontFamily: 'Futura',
        color: '#fff',
      //  textShadowRadius: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080',
        textAlign: 'center'
    },
    entityStyle: {
      
        transform: [
            {translate: [7, 0, 6]}
          ]
    }
})

export default MainMenu