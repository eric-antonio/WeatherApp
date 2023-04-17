import React from 'react';
import {  SafeAreaView,Text, View , StyleSheet} from 'react-native';

const  App = ()=> {
  return (
    <SafeAreaView style={styles.wrapper} >

      <View style={styles.container}>

       <Text style={styles.temp}>6</Text>

       <Text style={styles.feels}>Feels like 5</Text>

       <Text style={styles.higLow}>Hing : 8 Low: 6</Text>

      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  wrapper:{
    flex: 1
  },
  container :{
    flex:1,
    alignItems:'center',
    
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
  }

});
export default App;