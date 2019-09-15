import React,{Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-360';
import GazeButton from "react-360-gaze-button";
import styles from './styles';
import axios from 'axios';


const News = (title, text, imageUrl) => (
    <View style={styles.newsContainer}>
        <Text style={styles.title}>
            {title}
        </Text>
        <View>
            <Image source={imageUrl}/>
            <Text style={styles.title}>
                {text}
            </Text>
        </View>
    </View>
)

export default class testing extends Component { 
    state = {
        gazed: false,
        message:"Welcome",
        isLoading: false,
        currentIndex: 0,
        news: [],
        title: 'Default title',
        imageUrl: '',
        text: 'Default description',

      };
    componentWillMount = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5019130324db4f7b98443775a702faaf')
            .then(res => console.log(res.data.articles));
    }

    fetchNews = async (source) => {
        try {
            let response = await fetch(
                source,
            );
            let responseJson = await response.json();
            console.log(responseJson)
            this.setState({
                news: responseJson.articles,
                title: responseJson.articles[0].title,
                text: responseJson.articles[0].description,
                imageUrl: responseJson.articles[0].urlToImage
            })
        } catch (error) {
            console.error(error);
        }
    }

    loadNews = (index) => {
        this.setState({
            currentIndex: index,
            title: this.state.news[index].title,
            text: this.state.news[index].description,
            imageUrl: this.state.news[index].urlToImage
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

    componentDidMount(): void {

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
              duration={10000}
              onClick={this.setGazed}
              render={(remainingTime, isGazed) => (
                <View style={styles.greetingBox}>
                    <Text style={styles.textItem}>{this.state.message}</Text>
                    <Text style={styles.nama}>Jonatan Laksamana</Text>
                    <Image style={styles.imageItem2} source={{uri:'./static_assets/people.png'}}/>
                    <Image style={styles.imageItem} source={{uri:'./static_assets/ok.png'}}/>

                  <Text style={styles.greeting}>
                    {gazed
                      ? "congrats"
                      : isGazed
                        ? "Hold your eye sight yaa " + Math.floor(remainingTime/1000)
                        : " "}
                  </Text>
                </View>
              )}
            />

                <View style={{flexDirection: 'row',marginLeft:0,marginTop:20}}>

                    <Image style={styles.icon} source={{uri:'./static_assets/msg.png'}}/>

                    <Image style={styles.icon} source={{uri:'./static_assets/wa.png'}}/>

                    <Image style={styles.icon} source={{uri:'./static_assets/ig.png'}}/>
                </View>

          </View>

        );
      }
    }

