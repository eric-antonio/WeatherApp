import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";

const App =()=>{
  const Tab = createBottomTabNavigator()
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>

  )
}

export default App;