import React from "react";
import { SafeAreaView,View, Text, StyleSheet  } from "react-native";
import { Feather } from '@expo/vector-icons';


const IconsText = (props) =>{
    const {iconName , iconColor ,  bodyText, bodyTextStyles} = props

    return(
        <View styles={styles.container}>
            
            <Feather name={iconName} size={50} color={iconColor} />

            <Text style={ [ styles.textTheme, bodyTextStyles ] }>{bodyText}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    textTheme:{
        fontWeight: 'bold'
    }

})

export default IconsText;