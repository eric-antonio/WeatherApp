import React from "react";
import { SafeAreaView,View, Text, StyleSheet  } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const IconsText = () =>{
    return(
        <View>
            
            <AntDesign name="user" size={50} color="black" />

            <Text style={populationText}>8000</Text>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default IconsText;