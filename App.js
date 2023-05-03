import React from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';


const App =()=>{
  const Tab = createBottomTabNavigator()
  return(
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor:'tomato',
          tabBarInactiveTintColor:'grey '
        }}
      >

        <Tab.Screen name={'Current'} component={CurrentWeather}/>
        <Tab.Screen name={'Upcoming'} component={UpcomingWeather}/>
        <Tab.Screen name= {'City'} component={City}/>

      </Tab.Navigator>

    </NavigationContainer>

  )
}

export default App;