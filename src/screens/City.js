import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground, StatusBar} from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import IconText from "../components/IconText";


const City = () =>{
    const{ container,
        imageLayout,
        countryName, 
        cityName, 
        cityText, 
        populationWrapper, 
        populationText,
        riseSetWrapper,
        riseSetText,
        rowLayout
    } = styles
    return(
        <SafeAreaView style={container}>

            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={imageLayout}
            >
                <Text style={ [ cityName , cityText ] }> London</Text>
                <Text style={ [ countryName ,cityText ] }> UK </Text>

                {/* Poupulation View */}
                <View style={ [ populationWrapper , rowLayout ] }>
                    <IconText 
                        iconName={'user'} 
                        iconColor={'white'} 
                        bodyText={'8000'}
                        bodyTextStyles={populationText}
                    />
                </View>

                {/* * Sun set & Sun Rise */}
                <View style={ [ riseSetWrapper , rowLayout ] }>

                    <IconText
                        iconName = {"sunrise"}
                        iconColor = {'white'}
                        bodyText = {'10:46:58am'}
                        bodyTextStyles = {riseSetText}
                    />

                    <IconText
                        iconName = {'sunset'}
                        iconColor = {'white'}
                        bodyText = {'17:49:51pm'}
                        bodyTextStyles = {riseSetText}
                    />


                </View>


            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginTop: StatusBar.currentHeight || 0,
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
        justifyContent:'center',
        marginTop:30

    },
    populationText:{
        fontSize: 24,
        marginLeft: 7.5,
        color : 'black'

    },riseSetWrapper:{
        justifyContent:'space-around',
        marginTop:20
    },
    riseSetText:{
        fontSize:20,
        color:'white'
    },
    rowLayout:{
        flexDirection:'row',
        alignItems:'center'
    }

})
export default City;