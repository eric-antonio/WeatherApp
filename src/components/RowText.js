import React from "react";
import { View, Text , StyleSheet} from "react-native";

const RowText = (props)=> {
    const {higLow ,  bodyText} =  props
    const {higLowWrapper} = styles
    return(
        <View style={styles.higLowWrapper}>

          <Text style={styles.higLow}>{bodyText}</Text>
          <Text style={styles.higLow}>{bodyText} </Text>

        </View>
    )
}

const styles =  StyleSheet.create({

})

export default RowText;