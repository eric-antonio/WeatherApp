import React from "react";
import { View, Text , StyleSheet} from "react-native";

const RowText = (props)=> {
    const {higLow ,  messageOne, messageTwo} =  props
    const {higLowWrapper} = styles
    return(
        <View style={styles.higLowWrapper}>

          <Text style={higLow}>{messageOne}</Text>
          <Text style={higLow}>{messageTwo} </Text>

        </View>
    )
}

const styles =  StyleSheet.create({

})

export default RowText;