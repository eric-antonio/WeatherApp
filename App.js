import React from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const App =()=>{
  const Tab = createBottomTabNavigator()
  const {nameText} = styles
  return(
    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen name={'Current'} component={CurrentWeather} style={nameText}/>
        <Tab.Screen name={'Upcoming'} component={UpcomingWeather} style={nameText}/>
        <Tab.Screen name= {'City'} component={City} style={nameText}/>

      </Tab.Navigator>

    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  nameText:{
    textAlign
  }
})

export default App;