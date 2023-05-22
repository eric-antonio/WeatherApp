import React from 'react';
import {  SafeAreaView,Text, View , StyleSheet,StatusBar} from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';
const  CurrentWeather = (weatherData)=> {

  const {
    container,
    tempStyles,
    feels,
    higLowWrapper,
    higLow,
    bodyWrapper,
    description,
    message
  } = styles;

  const {
    main:{temp, feels_like, temp_max, temp_min}, 
    weather
  }= weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView 
      style={[
        styles.wrapper, 
        {backgroundColor:weatherType[weatherCondition].backgroundColor}
      ]}
    >

      {/* The main View of the Application */}
      <View style={container}>

        {/* Applying a icon   */}
        <Feather 
          name={weatherType[weatherCondition].icon} 
          size={74} 
          color="white"
        />

        <Text style={tempStyles}> {temp} </Text>

        <Text style={feels}> {`Feels like ${feels_like}`} </Text>

        {/* RowText Component */}
        <RowText 
          messageOne ={`High:${temp_max} `} 
          messageTwo = {`Low:${temp_min} `} 
          containerStyles ={higLowWrapper} 
          messageOneStyles = {higLow}
          messageTwoStyles = {higLow}
        />
      </View>

      {/* New View The Body Wrapper */}
      <RowText 
        messageOne = {weather[0].description}
        messageTwo = {weatherType[weatherCondition].message}
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
    backgroundColor:'#f0f8ff',
  },
  container :{
 
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop: StatusBar.currentHeight || 0,
    
  },
  tempStyles:{
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