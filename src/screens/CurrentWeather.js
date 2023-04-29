import React from 'react';
import {  SafeAreaView,Text, View , StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

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
        <RowText 
          messageOne ={'High: 8 '} 
          messageTwo = {'Low: 6'} 
          containerStyles ={styles.higLowWrapper} 
          messageOneStyles = {styles.higLow}
          messageTwoStyles = {styles.higLow}
        />
      </View>

      {/* New View The Body Wrapper */}
      <RowText 
        messageOne = {"It's Sunny"}
        messageTwo = {"It's perfect t-shirt weather"}
        containerStyles = {styles.bodyWrapper} 
        messageOneStyles ={styles.description} 
        messageTwoStyles = {styles.message}
      />


      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}></Text>
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