import React from "react";
import { SafeAreaView ,View, Text , StyleSheet, ImageBackground, StatusBar} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//* A nossa Tela.
const City = () =>{
    const{ container} = styles
    return(
        <SafeAreaView style={container}>
            {/* Imagem de fundo com componenetes por dentro.  */}
            <Text>Hello</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'pink'
    }
})

export default City;