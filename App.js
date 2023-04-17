import React from 'react';
import {  SafeAreaView,Text, View , StyleSheet} from 'react-native';

const  App = ()=> {
  return (
    <SafeAreaView style={styles.wrapper} >
      <View style={styles.container}>
       <Text> Current Weather</Text>
       <Text>6</Text>
       <Text>Feels like 5</Text>
       <Text>Hing : 8 Low: 6</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  wrapper:{
    flex: 1
  },
  container :{
    backgroundColor: 'pink',
    flex:1,
    alignItems:'center'
  }

});
export default App;