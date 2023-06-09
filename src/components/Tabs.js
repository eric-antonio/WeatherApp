import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ( {weather} ) => {
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor:'#ffff',
                tabBarInactiveTintColor:'grey',
                tabBarStyle:{
                    backgroundColor: '#f0f8ff'
                },
                headerStyle:{
                    backgroundColor: '#f0f8ff'
                },
                headerTitleStyle:{
                    color:'#ffff',
                    fontWeight:'bold',
                    fontSize:25,
                   
                }
            
            }}
        >

            {/* Icon Current  */}
            <Tab.Screen 
                name={'Current'} 
                // component={CurrentWeather}
                options={{
                    tabBarIcon: ({focused}) =>(
                    <Feather
                        name={'droplet'}
                        size={25}
                        color={focused ? '#ffff' : 'black'}
                    />
                    )
                }}>

                {() => <CurrentWeather weatherData={weather.list[0]} /> }
            </Tab.Screen>

            
            {/* Icon Upcoming */}
            <Tab.Screen 
            name={'Upcoming'} 
            component={UpcomingWeather}
            options={{
                tabBarIcon:({focused}) =>(
                <Feather
                    name={'clock'}
                    size={25}
                    color={focused ? '#ffff' : 'black'}
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
                    color={focused ? '#ffff' : 'black'}
                />
                )
            }}
            
            />

      </Tab.Navigator>
    )
}

export default Tabs;