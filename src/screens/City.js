import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground, StatusBar} from "react-native";
import { AntDesign } from '@expo/vector-icons';

//* A nossa Tela.
const City = () =>{
    const {container,imageLayout, countryName, cityName, cityText, populationWrapper, populationText} = styles
    return(
        <SafeAreaView style={container}>

            //* Imagem de fundo.
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                styles={imageLayout}
            >
                <Text style={[cityName, cityText]}>City: London</Text>
                <Text style={[countryName,cityText]}>Country: UK </Text>

                //* View que ira receber o icon da população!
                <View style={populationWrapper}>

                    <AntDesign name="user" size={50} color="black" />

                    <Text style={populationText}>8000</Text>

                </View>

            </ImageBackground>

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
    },
    populationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30

    },
    populationText:{

    }
})

export default City;