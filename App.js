import React from 'react';
import {  SafeAreaView,Text, View , StyleSheet} from 'react-native';

const  App = ()=> {
  return (
    <SafeAreaView>
      <View style={styles.container}>
       <Text>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container :{
    backgroundColor: 'pink'
  }

});
export default App;