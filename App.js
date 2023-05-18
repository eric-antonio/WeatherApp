import React, {useState, useEffect} from "react";
import {ActivityIndicator, View ,StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env';
import { useGetWeather } from "./src/hooks/useGetWeather";

const App =()=>{

<<<<<<< Updated upstream
  const[loading, errorMsg, weather] =  useGetWeather();
  console.log(loading,errorMsg,weather);

=======
  const [loading , setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLong] = useState([]);
  
  // * Here I'm trying to access the weather Api
  const fetchWeatherData = async() => {

    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
      const data = await response.json();
      setWeather(data);
     
  
    } catch (errorMsg) {
      setErrorMsg("Ops! Sorry Try again Could not fetch Weather. ");
    }finally{

      setLoading(false);
      
    }

  }

  // ? Here we aks permission to accesses the current location!
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLong(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat,lon]);

  if (weather) {
    console.log(weather)
  }

  //* Activity Indicator Loading
>>>>>>> Stashed changes
  if(loading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }

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