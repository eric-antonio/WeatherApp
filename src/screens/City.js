import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground} from "react-native";

//* A nossa Tela.
const City = () =>{
    const {container,imageLayout} = styles
    return(
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                styles={imageLayout}
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
    },
    imageLayout:{
        flex:1,
    }
})

export default City;