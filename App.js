import React, {useState} from "react";
import { ActivityIndicator, View } from "react-native/types";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";


const App =()=>{
  const [loading , setLoading ]=  useState(true)
  if(loading){
    return(
      <View>
        <ActivityIndicator/>
      </View>
    )
  }

  return(
    <NavigationContainer>
      <Tabs/>
     
    </NavigationContainer>

  )
}

export default App;