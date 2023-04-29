import React from 'react';
import {  SafeAreaView,Text, View , StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const  CurrentWeather = ()=> {
  return (
    <SafeAreaView style={styles.wrapper}>

      {/* The main View of the Application */}
      <View style={styles.container}>
        {/* Applying a icon   */}
       <Feather name="sun" size={74} color="black" />
       <Text style={styles.temp}>6</Text>
       <Text style={styles.feels}>Feels like 5</Text>

        {/* RowText Component */}
      </View>

      {/* New View The Body Wrapper */}
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  wrapper:{
    flex: 1,
    backgroundColor:'pink',
  },
  container :{
 
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    
  },
  temp:{
    color:'black',
    fontSize:48,
  },
  feels:{
    color:'black',
    fontSize:30
  },
  higLow:{
    color:'black',
    fontSize:20,
  },
  higLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize: 48
  },
  message:{
    fontSize:30
  }
});
export default CurrentWeather;