import React from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet } from "react-native/types";

const City =()=>{
    const{ container,
        imageLayout,
        countryName, 
        cityName, 
        cityText, 
        populationWrapper, 
        populationText,
        riseSetWrapper,
        riseSetText
    } = styles
    return(
        <SafeAreaView style={container}>


        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }

})
export default City;