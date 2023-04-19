import React from 'react';
import {  SafeAreaView,Text, View , StyleSheet} from 'react-native';

const  App = ()=> {
  return (
    <SafeAreaView style={styles.wrapper}>

      {/* The main View of the Application */}
      <View style={styles.container}>
       <Text style={styles.temp}>6</Text>
       <Text style={styles.feels}>Feels like 5</Text>

       {/* Here we have the view that show's if it's hig or Low */}

        <View style={styles.higLowWrapper}>

          <Text style={styles.higLow}>Hing: 8 </Text>
          <Text style={styles.higLow}>Low: 6 </Text>

        </View>
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
    paddingTop:50,
    backgroundColor:'pink',
  },
  container :{
 
    flex:1,
    alignItems:'center'
    
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
    alignItems:'flex-start'
  },
  description:{
    fontSize: 48
  },
  message:{
    fontSize:30
  }
});
export default App;