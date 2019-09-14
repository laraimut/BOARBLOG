import React,{Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-360';
import GazeButton from "react-360-gaze-button";
import getMeme from "../mock/meme";
import getLatestMovies from "../mock/movie";




export default class testing extends Component { 
    state = {
        gazed: false
      };

    componentDidMount(): void {
        getMeme()
            .then(res => console.log(res));
        // getLatestMovies()
        //     .then(res => console.log(res));
    }

    setGazed = () => {
    this.setState({ gazed: true });
  };
    // handleButtonClick = () => {
    //     raycasters: [{
           
    //         getRayDirection: () => [0, 0, -1]
    //       }]
    //   };
    
    render() {
        const { gazed } = this.state;
const styles = StyleSheet.create({
    aboutWrapper: {
        width: 800,
        height: 600,
        // backgroundColor:'#e9e9e2',
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
        fontSize: 100,
        color:'#ffff',
        transform: [
            {translate: [0, 0, 0]}
          ]
        ,
        marginTop:-80,
        marginLeft:-200
    },
    imageItem:{
        marginBottom: 20,
        width: 50,
        height: 50,
        marginLeft:-20,
        marginTop:10
    },  imageItem2:{
        marginBottom: 20,
        width: 130,
        height: 130,
        marginLeft:-60,
        marginTop:50
    },
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        justifyContent: "center",
        alignItems: "center"
      },
      greetingBox: {
        padding: 20
      },
      greeting: {
        fontSize: 30
        ,marginLeft:-150
      },
      nama:{
    fontSize:30,
    marginLeft:-130
      },
      icon:{
        marginBottom: 20,
        width: 50,
        height: 50,
        marginLeft:-100,
        marginTop:10
     
      }

})
        return (
            <View style={styles.panel}>
            <GazeButton
              duration={3000}
              onClick={this.setGazed}
              render={(remainingTime, isGazed) => (
                <View style={styles.greetingBox}>
                    <Text style={styles.textItem}>Welcome!</Text>
                    <Text style={styles.nama}>Jonatan Laksamana</Text>
                    <Image style={styles.imageItem2} source={{uri:'./static_assets/people.png'}}/>

                            <Image style={styles.imageItem} source={{uri:'./static_assets/ok.png'}}/>

                  <Text style={styles.greeting}>
                    {gazed
                      ? " "
                      : isGazed
                        ? "going to entertainment in " + Math.floor(remainingTime/1000)
                        : " "}
                  </Text>
                  <View style={{flexDirection: 'row',marginLeft:-100,marginTop:20}}>
                  
                  <Image style={styles.icon} source={{uri:'./static_assets/msg.png'}}/>

                  <Image style={styles.icon} source={{uri:'./static_assets/wa.png'}}/>

                  <Image style={styles.icon} source={{uri:'./static_assets/ig.png'}}/>
</View>
                </View>
              )}
            />
          </View>
//             <View style={styles.aboutWrapper}>
//             <View style={styles.textWrapper}>
//             <Text style={styles.textItem}>
      
//   {this.props.isi}
//             </Text>
//             {/* <VrButton  onClick={this.handleButtonClick}/> */}
//             <Image style={styles.imageItem} source={{uri:'./static_assets/ok.png'}}/>
           
//             </View>
           
//        </View>
        );
      }
    }

// const testing =(props)=>{

//     return(
//         <View style={styles.aboutWrapper}>
//              <View style={styles.textWrapper}>
//              <Text style={styles.textItem}>
       
//    WELCOME!
//              </Text>
//              <Image source={{uri: 'https://spng.pngfly.com/20180320/yzq/kisspng-arrow-computer-icons-logo-white-down-arrow-png-5ab1bd5bd37fc0.3074533915215977878663.jpg'}} />
//              </View>
            
//         </View>
//     )
// }


// export default testing;