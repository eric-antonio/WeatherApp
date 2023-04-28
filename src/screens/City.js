import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground, StatusBar} from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import IconsText from "../components/IconText";


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
                <Text style={[cityName, cityText]}> London</Text>
                <Text style={[countryName,cityText]}> UK </Text>

                {/* Poupulation View */}
                <View style={populationWrapper}>
                    <IconsText/>
                </View>

                {/* * Sun set & Sun Rise */}
                <View style={riseSetWrapper}>

                    <Text style={riseSetText}>10:46:58am </Text>
                    <Feather name="sunrise" size={50} color="white" />

                    <Text style={riseSetText}> 17:49:51pm </Text>
                    <Feather name="sunset" size={50} color="white" />

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
        marginLeft: 7.5,
        color : 'black'

    },riseSetWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:20
    },
    riseSetText:{
        fontSize:20,
        color:'white'
    }

})
export default City;