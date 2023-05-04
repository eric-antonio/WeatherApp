import React from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const App =()=>{
  const Tab = createBottomTabNavigator()
  return(
    <NavigationContainer>

      <Tab.Navigator screenOptions={{tabBarActiveTintColor:'#00bfff',tabBarInactiveTintColor:'grey '}}>

        {/* Icon Current  */}
        <Tab.Screen 
          name={'Current'} 
          component={CurrentWeather}
          options={{
            tabBarIc
        
        />
        {/* Icon Upcoming */}
        <Tab.Screen 
          name={'Upcoming'} 
          component={UpcomingWeather}
          options={{
            tabBarIcon:({focused}) =>(
              <Feather
                name={'clock'}
                size={25}
                color={focused ? '#00bfff' : 'black'}
              />
            )
          }}
        />


        {/* Icon City */}
        <Tab.Screen 
          name= {'City'} 
          component={City}
          options={{
            tabBarIcon:({focused}) =>(
              <AntDesign
                name={'home'}
                size={25}
                color={focused ? '#00bfff' : 'black'}
              />
            )
          }}
        
        />

      </Tab.Navigator>

    </NavigationContainer>

  )
}

export default App;