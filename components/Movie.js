import React ,{Component}from 'react';
import {View, Text, StyleSheet, Image, VrButton} from 'react-360';
import getLatestMovies from "../mock/movie";

export default class Movie extends Component{
    state={
        movies:[]
    }

    componentDidMount(): void {
        getLatestMovies()
            .then(res => {
                this.setState({
                    movies:res
                })
            })


    }

    render() {
        const styles = StyleSheet.create({
            aboutWrapper: {
                width: 600,
                height: 500,
                backgroundColor: "rgba(255, 255, 255, 0.4)",

                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 20,
                transform: [
                    {translate: [0, 2, -30]}
                ]
            },
            actorImage: {
                fontSize:60
            },
            textItem: {
                fontSize: 30,
                color:'#000'
            },
            textItem2: {
                fontSize: 40,
                color:'#000',
                marginBottom:0,padding:0,marginLeft:20
            },
            skillWrapper:{
                margin:15,
                height: 350,
                width:250,
                backgroundColor:'#89CFF0',
                alignItems: 'center'
            },  imageItem2:{
                marginBottom: 20,
                width: 130,
                height: 200,

                marginTop:5
            }

        });
        if(this.state.movies.length>0){
            return(
                <View style={styles.aboutWrapper}>
                    <Text style={styles.actorImage}>Lates Movies </Text>
                    <View style={{ flexDirection: 'row'}}>
                        <View style={styles.skillWrapper}>
                            <VrButton>
                                <Text style={styles.textItem2}>Judul</Text>

                                <Image style={styles.imageItem2} source={{uri:'./static_assets/people.png'}}/>
                                <Text style={styles.textItem}>MicroFocus</Text>
                            </VrButton>
                        </View>

                    </View>

                </View>
            );
        }
        else{
            return(
                <View style={styles.aboutWrapper}>
                    <Text style={styles.actorImage}>Lates Movies </Text>
                    <View style={{ flexDirection: 'row'}}>
                        <View style={styles.skillWrapper}>
                            <VrButton>
                                <Text style={styles.textItem2}>Judul</Text>

                                <Image style={styles.imageItem2} source={{uri:'./static_assets/people.png'}}/>
                                <Text style={styles.textItem}>MicroFocus</Text>
                            </VrButton>
                        </View>

                    </View>

                </View>
            );
        }




}
}