import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground, StatusBar} from "react-native";

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
            <Text>City: London</Text>
            <Text>Country: UK </Text>
        </SafeAreaView>
    )
}

//* O nosso CSS
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'pink'
    },
    imageLayout:{
        flex:1,
    }
})

export default City;