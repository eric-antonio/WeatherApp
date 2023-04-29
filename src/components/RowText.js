import React from "react";
import { View, Text , StyleSheet} from "react-native";

const RowText = (props)=> {
    
    const {
        messageOne,
        messageTwo,
        container,
        messageOneStyles ,
        messageTwoStyles
    } = styles
    
    return(
        <View style={container}>

          <Text style={messageOneStyles}>{messageOne}</Text>
          <Text style={messageTwoStyles}>{messageTwo} </Text>

        </View>
    )
}

const styles =  StyleSheet.create({

})

export default RowText;