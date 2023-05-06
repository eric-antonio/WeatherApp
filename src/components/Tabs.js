import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Tabs =()=>{
    const Tab = createBottomTabNavigator()
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'grey ',
            
            }}
        >

            {/* Icon Current  */}
            <Tab.Screen 
            name={'Current'} 
            component={CurrentWeather}
            options={{
                tabBarIcon: ({focused}) =>(
                <Feather
                    name={'droplet'}
                    size={25}
                    color={focused ? 'blue' : 'black'}
                />
                )
            }}
            
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
                    color={focused ? 'blue' : 'black'}
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
                    color={focused ? 'blue' : 'black'}
                />
                )
            }}
            
            />

      </Tab.Navigator>
    )
}

export default Tabs;