import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground, StatusBar} from "react-native";

//* A nossa Tela.
const City = () =>{
    const {container,imageLayout, countryName, cityName, cityText} = styles
    return(
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                styles={imageLayout}
            >

            </ImageBackground>
            <Text style={[cityName, cityText]}>City: London</Text>
            <Text style={[countryName,cityText]}>Country: UK </Text>
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

        fontSize:'40',

    },
    countryName:{

        fontSize:'30',

    },cityText:{
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        color:'white'
    }
})

export default City;