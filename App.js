import React, {useState, useEffect} from "react";
import {ActivityIndicator, View ,StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";


const App =()=>{

  const [loading , setLoading] = useState(true)
  const [location, setLocation] =  useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  //* Activity Indicator Loading
  if(loading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }
  // * Catching Location from Expo-Location
  useEffect(()=>{

  })

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