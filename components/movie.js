import React from 'react';
import {View, Text, image, StyleSheet, Image} from 'react-360';
import axios from 'axios';

class movie  extends React.Component{
    state={
        movies:[]
    }
    componentDidMount(): void {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=08603a286b0923c2b0fafeb42ac7d970&language=en-US&page=1")
            .then(res => {
                this.setState({
                    movies:res.data.results
                });
                // console.log(res.data.results);
            });

    }

    render(){
        console.log(this.state.movies);
        if(this.state.movies.length>0){
            return(
                <View style={styles.aboutWrapper}>
                    <Image style={styles.actorImage} source={{uri:'./static_assets/aboutme.png'}}/>
                    <View style={styles.textWrapper}>
                        <Text style={styles.textItem}>
                            {this.state.movies.slice(0,6).map(item => (
                                item.title
                            ))}
                        </Text>
                    </View>

                </View>
            )
        }
        else{
            return (
                <View style={styles.aboutWrapper}>
                    <Image style={styles.actorImage} source={{uri:'./static_assets/aboutme.png'}}/>
                    <View style={styles.textWrapper}>
                        <Text style={styles.textItem}>
                            loading
                        </Text>
                    </View>

                </View>
            )
        }

    }
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

export default movie;