import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";

const App =()=>{
  return(
    <View style={styles.container}>
      <UpcomingWeather/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App;