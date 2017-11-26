import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,Image , Dimensions , StatusBar } from 'react-native';
import { Font } from 'expo';
const Quotes = require('./quotes.json');
const Window = Dimensions.get('window');
export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      backgroundColor : "#252525",
      color : "#fff",
      num :  Math.floor(Math.random() * 100),
      isFontLoaded : false
    }
  }
  randomQuotes(){
    let random = Math.floor(Math.random() * 100);
    this.setState({num : random});
  }
  componentDidMount() {
    Font.loadAsync({
      'PT': require('./assets/PTF55F.ttf'),
      'bitter' : require('./assets/Bitter-Regular.ttf')
    }).then(()=>{
      this.setState({isFontLoaded : true})
    });
  }
  get button(){
    return(
      <View onTouchStart={()=>{
        this.randomQuotes();
        this.setState({backgroundColor : 'transparent',color : "#252525"})
      }} onTouchEnd={()=>{
        this.setState({backgroundColor : '#252525',color : "#fff"})
      }} style={{justifyContent : 'center',alignItems : 'center',margin : 20 , backgroundColor : this.state.backgroundColor,padding : 15,paddingHorizontal : 60,borderRadius : 8,borderColor : '#252525',borderWidth : 2}}>
        <Text style={{color : this.state.color,fontSize : 18,fontFamily: 'bitter'}}>motivate me!</Text>
    </View>
    )
  }
  render() {
    return (
      this.state.isFontLoaded && 
      <View style={styles.container}>  
          <View style={styles.hearderContainer}>
              <Text style={styles.hearder}>Quotes</Text>
          </View>
          <Image source={require('./img/7543.jpg')} blurRadius={4} style={styles.stretch} >
          <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.quoteContainer}>{Quotes[this.state.num].quote}</Text>
              <Text style={styles.authorContainer}> " {Quotes[this.state.num].author} "</Text>
            </View>
            <View style={styles.buttonContainer}>
                {this.button}
            </View>
          </View>
          </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor : 'transparent',
  },
  button:{
    backgroundColor : "#252525",
    borderRadius : 5,
    flex : 1,
    flexDirection : 'row'
  },
  stretch : {
    resizeMode : 'cover' , 
    flex : 6,
    width : window.width,
    height : window.height
  },
  mainContainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 20
  },
  buttonContainer : {
    flex : -1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  textContainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  quoteContainer : {
    margin : 5,
    fontSize : 30,
    textAlign : 'justify',
    textShadowColor : '#aaa' ,
    textShadowOffset:{width : 0.2,height : 0.5},
    fontFamily: 'bitter'
  },
  authorContainer : {
    marginVertical : 25,
    fontSize : 18,
    textAlign : 'left',
    textShadowColor : '#aaa' ,
    fontFamily: 'bitter', 
    textShadowOffset:{width : 0.5,height : 1}
  },
  hearderContainer : {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#252525",
    alignItems:"center",
    paddingRight: 5,
    paddingVertical : 20
  },
  hearder : {
    fontSize : 35 , 
    flex : 1,
    justifyContent : 'center',
    textAlign : 'center',
    color : '#fff', 
    fontFamily: 'PT'
  }
});
