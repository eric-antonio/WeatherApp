import React from 'react';
import {  SafeAreaView,Text, View , StyleSheet} from 'react-native';

const  App = ()=> {
  return (
    <SafeAreaView style={styles.wrapper} >
      <View style={styles.container}>
       <Text>Open up App.js to start working on your app!</Text>
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
    flex:1
  }

});
export default App;