import React, {useState} from "react";
import { ActivityIndicator } from "react-native/types";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";


const App =()=>{
  const [loading , setLoading ]=  useState(true)
  return(
    <NavigationContainer>
      <Tabs/>


export default App;