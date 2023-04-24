import React from "react";
import { SafeAreaView ,View, Text , StyleSheet} from "react-native";

//* A nossa Tela.
const City = () =>{
    const {container} = styles
    return(
        <SafeAreaView style={container}>
            <Text>City</Text>
        </SafeAreaView>
    )
}

//* O nosso CSS
const styles = StyleSheet.create({
    container:{
        flex: 1
      
    }
})

export default City;