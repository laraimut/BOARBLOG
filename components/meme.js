import React ,{Component }from 'react';
import {View, Text, StyleSheet, Image, VrButton, AsyncStorage} from 'react-360';
import GazeButton from "react-360-gaze-button";
import getLatestMovies from "../mock/movie";


export default class Movie extends Component{ 
    setGazed = () => {
		this.setState({ gazed: true, isLoading: true });
	};

	state = {
		gazed: false,
		isLoading: false,
        movies:[],
		currentIndex: 0
	}

	componentDidMount(): void {
        getLatestMovies()
            .then(res => {
                console.log(res);
                this.setState({
                    movies:res
                })
            })
    }

    loadNext = async () => {
		this.state.currentIndex === this.state.news.length 
			? this.fetchNews('news') 
			: this.loadNews(this.state.currentIndex + 1)
	}

	loadPrevious = async () => {
		this.state.currentIndex === 0 
			? this.fetchNews('news') 
			: this.loadNews(this.state.currentIndex - 1)
	}


    render() {

        const styles = StyleSheet.create({
                    aboutWrapper: {
            width: 600,
            height: 600,
            backgroundColor: "rgba(255, 255, 255, 0.4)",

            flexDirection: 'column',
            alignItems: 'center'
          
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
        },
        greetingBox: (elapsed, total) => ({
            padding: 20,
            backgroundColor: `rgba(255, 255, 255, 1)`,
            borderColor: '#639dda',
            borderWidth: 2,
            marginTop: 5,
        }),
        greeting: {
          fontSize: 30,
          textAlign: 'center',
        },
        title: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            fontSize: 30,
            color: '#fff',
            textAlign: 'center',
        },
        textContainer: {
            justifyContent: 'center',
            alignItems: 'center',
        },  imageItem3:{
            width: 50,
            height: 50
        }
    
    })
    const { gazed, title, imageUrl, text, isLoading } = this.state;
        if(this.state.movies.length>0){
            return(
                <View style={styles.aboutWrapper}>
                    <Text style={styles.actorImage}> LatestMeme </Text>
                    <GazeButton
                        duration={100}
                        onClick={() => {

                            this.setState({
                                currentIndex:this.state.currentIndex-=1
                            })
                            getLatestMovies(this.state.currentIndex)
                                .then(res => {
                                    this.setState({
                                        movies:res
                                    })
                                });

                        }}
                        render={(remainingTime, isGazed) => {
                            const opacity = 1 - (remainingTime/1000)

                            return (
                                <View style={styles.greetingBox}>
                                    <Image style={styles.imageItem3} source={{uri:'./static_assets/kiri.png'}}/>
                                </View>
                            )}
                        }
                        style={styles.gazeButton}
                    />
                    <View style={{ flexDirection: 'row'}}>
                        {this.state.movies.map(item => (
                            <View style={styles.skillWrapper}>
                                <Text>{item.title}</Text>
                                <VrButton>
                                    <Image style={styles.skillWrapper} source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}/>
                                </VrButton>
                            </View>
                        ))}
                    </View>
                    <GazeButton
                        duration={100}
                        onClick={() => {

                            this.setState({
                                currentIndex:this.state.currentIndex+=1
                            })
                            getLatestMovies(this.state.currentIndex)
                                .then(res => {
                                    this.setState({
                                        movies:res
                                    })
                                    AsyncStorage
                                        .setItem("url" , res[0].poster_path );
                                });

                        }}
                        render={(remainingTime, isGazed) => {
                            const opacity = 1 - (remainingTime/1000);

                            return (
                                <View style={styles.greetingBox}>
                                    <Image style={styles.imageItem3} source={{uri:'./static_assets/kanan.png'}}/>

                                </View>
                            )}
                        }
                        style={styles.gazeButton}
                    />
                </View>
            );
        }
        else{
            return(
                <View style={styles.aboutWrapper}>
                    <Text style={styles.actorImage}> LatestMovie </Text>
                    <GazeButton
                        duration={1000}
                        onClick={() => {

                            this.setState({
                                currentIndex:this.state.currentIndex-=1
                            })
                            getLatestMovies(this.state.currentIndex)
                                .then(res => {
                                    this.setState({
                                        movies:res
                                    })
                                });

                        }}
                        render={(remainingTime, isGazed) => {
                            const opacity = 1 - (remainingTime/1000)

                            return (
                                <View style={styles.greetingBox}>
                                    <Image style={styles.imageItem3} source={{uri:'./static_assets/kiri.png'}}/>
                                </View>
                            )}
                        }
                        style={styles.gazeButton}
                    />
                    <View style={{ flexDirection: 'row'}}>

                        <View style={styles.skillWrapper}>
                            <VrButton>
                                <Text style={styles.textItem2}>Judul</Text>

                                <Image style={styles.imageItem2} source={{uri:'./static_assets/people.png'}}/>
                                <Text style={styles.textItem}>MicroFocus</Text>
                            </VrButton>
                        </View>
                        <View style={styles.skillWrapper}>
                            <VrButton>
                                <Text style={styles.textItem2}>Judul</Text>

                                <Image style={styles.imageItem2} source={{uri:'./static_assets/people.png'}}/>
                                <Text style={styles.textItem}>MicroFocus</Text>
                            </VrButton>
                        </View>


                    </View>
                    <GazeButton
                        duration={1000}
                        onClick={this.loadPrevious}
                        render={(remainingTime, isGazed) => {
                            const opacity = 1 - (remainingTime/1000)

                            return (
                                <View style={styles.greetingBox}>
                                    <Image style={styles.imageItem3} source={{uri:'./static_assets/kanan.png'}}/>

                                </View>
                            )}
                        }
                        style={styles.gazeButton}
                    />
                </View>
            );
        }


}
}