import React from 'react';
import {  SafeAreaView,Text, View , StyleSheet,StatusBar} from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';
const  CurrentWeather = ()=> {

  const {
    container,
    temp,
    feels,
    higLowWrapper,
    higLow,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={styles.wrapper}>

      {/* The main View of the Application */}
      <View style={container}>
        {/* Applying a icon   */}
       <Feather name="sun" size={74} color="black" />
       <Text style={temp}>6</Text>
       <Text style={feels}>Feels like 5</Text>

        {/* RowText Component */}
        <RowText 
          messageOne ={'High: 8 '} 
          messageTwo = {'Low: 6'} 
          containerStyles ={higLowWrapper} 
          messageOneStyles = {higLow}
          messageTwoStyles = {higLow}
        />
      </View>

      {/* New View The Body Wrapper */}
      <RowText 
        messageOne = {"It's Sunny"}
        messageTwo = {"It's perfect t-shirt weather"}
        containerStyles = {bodyWrapper} 
        messageOneStyles ={description} 
        messageTwoStyles = {message}
      />

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  wrapper:{
    flex: 1,
    backgroundColor:'dodgerblue',
  },
  container :{
 
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop: StatusBar.currentHeight || 0,
    
  },
  temp:{
    color:'black',
    fontSize:48,
  },
  feels:{
    color:'black',
    fontSize:30
  },
  higLow:{
    color:'black',
    fontSize:20,
  },
  higLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize: 48
  },
  message:{
    fontSize:30
  }
});
export default CurrentWeather;