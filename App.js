import React, {useState, useEffect} from "react";
import {ActivityIndicator, View ,StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';



const App =()=>{

  const [loading , setLoading] = useState(true)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
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