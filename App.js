import React, {useState, useEffect} from "react";
import {ActivityIndicator, View ,StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env';
import {useGetWeather} from './src/hooks/useGetWeather';;


const App =()=>{


  const [loading, errorMsg, weather] =  useGetWeather();
  console.log(loading,errorMsg,weather);

  if(weather && weather.list){
    return(
      <NavigationContainer>
  
        <Tabs weather={weather}/>
       
      </NavigationContainer>
  
    )
  }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (weather) {
    text = JSON.stringify(weather);
    console.log(weather)
  }
  
 
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center'
  }
})


export default App;