import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground} from "react-native";

//* A nossa Tela.
const City = () =>{
    const {container} = styles
    return(
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/')}
            >

            </ImageBackground>
            <Text>City</Text>
        </SafeAreaView>
    )
}

//* O nosso CSS
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'pink'
    }
})

export default City;