import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground, StatusBar} from "react-native";

//* A nossa Tela.
const City = () =>{
    const {container,imageLayout, countryName, cityName} = styles
    return(
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                styles={imageLayout}
            >

            </ImageBackground>
            <Text style={cityName}>City: London</Text>
            <Text style={countryName}>Country: UK </Text>
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
    },
    cityName:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:'40',
        fontWeight:'bold',
        color:'white'
    },
    countryName:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:'40',
        fontWeight:'bold',
        color:'white'
    }
})

export default City;