import React from "react";
import { SafeAreaView,View, Text, StyleSheet  } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const IconsText = () =>{
    return(
        <View>
            
            <AntDesign name={iconName} size={50} color={iconColor} />

            <Text style={populationText}>8000</Text>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default IconsText;