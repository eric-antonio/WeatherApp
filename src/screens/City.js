import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground, StatusBar} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


//* A nossa Tela.
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
            {/* Imagem de fundo com componenetes por dentro.  */}
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                styles={imageLayout}
            >

                <Text style={[cityName, cityText]}>City: London</Text>
                <Text style={[countryName,cityText]}>Country: UK </Text>

                {/* Poupulation View */}
                <View style={populationWrapper}>

                    <AntDesign name="user" size={50} color="black" />

                    <Text style={populationText}>8000</Text>

                </View>
                
                {/* * Sun set & Sun Rise */}
                <View style={riseSetWrapper}>

                    <Text style={riseSetText}>Sunrise 10:46:58am </Text>
                    <Feather name="sunrise" size={50} color="white" />

                    <Text style={riseSetText}>Sunset 17:49:51pm </Text>
                    <Feather name="sunset" size={50} color="white" />

                </View>

                
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex:1,
        
        
    },
    cityName:{

        fontSize:40,

    },
    countryName:{

        fontSize:40,

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
        fontSize: 24,
        marginLeft: 8,
        color : 'black',
        fontWeight:'bold'

    },riseSetWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:20
    },
    riseSetText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
})

export default City;