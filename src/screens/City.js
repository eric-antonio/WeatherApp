import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground, StatusBar} from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const City = () =>{
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

            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>City: London</Text>
                <Text style={[countryName,cityText]}>Country: UK </Text>

                {/* Poupulation View */}
                <View style={populationWrapper}>

                    <AntDesign name="user" size={50} color="black" />

                    <Text style={populationText}>8000</Text>

                </View>


            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'#00bfff'
    },
    imageLayout:{
       flex:1
    }

})
export default City;