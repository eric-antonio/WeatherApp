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

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  wrapper:{
    flex: 1
  },
  container :{
    backgroundColor:'pink',
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
  }
});
export default App;