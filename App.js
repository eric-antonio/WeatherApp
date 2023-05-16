import React, {useState, useEffect} from "react";
import {ActivityIndicator, View ,StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env';



const App =()=>{

  const [loading , setLoading] = useState(true);
 
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLong] = useState([]);
  

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (weather) {
    text = JSON.stringify(weather);
    console.log(weather)
  }

  //* Activity Indicator Loading
  if(loading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }

  // ? App returnig the Tabs Navigation!
  return(
    <NavigationContainer>

      <Tabs/>
     
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center'
  }
})


export default App;