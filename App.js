import React from "react";
import { SafeAreaView, View, Text, StyleSheet ,StatusBar} from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";

const App =()=>{

  return(
    <NavigationContainer>

    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
  }
})

export default App;