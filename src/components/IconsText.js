import React from "react";
import { SafeAreaView,View, Text, StyleSheet  } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const IconsText = (props) =>{
    const {iconName , iconColor ,  bodyText} = props
    const {textTheme}  = styles
    return(
        <View>
            
            <AntDesign name={iconName} size={50} color={iconColor} />

            <Text style={textTheme}>{bodyText}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    textTheme:{
        
    }

})

export default IconsText;