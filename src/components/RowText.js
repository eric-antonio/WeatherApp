import React from "react";
import { View, Text , StyleSheet} from "react-native";

const RowText = (props)=> {
    const {higLow ,  messageOne, messageToo} =  props
    const {higLowWrapper} = styles
    return(
        <View style={styles.higLowWrapper}>

          <Text style={styles.higLow}>{messageOne}</Text>
          <Text style={styles.higLow}>{messageToo} </Text>

        </View>
    )
}

const styles =  StyleSheet.create({

})

export default RowText;