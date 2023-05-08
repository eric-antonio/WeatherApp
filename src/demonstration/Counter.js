import React from "react";
import { View , Text , Button , StyleSheet } from "react-native";
const Counter =()=>{
    let count = 0
    return(
        <View>
            <Text>{`Count: ${count}`}</Text>
            <Button/>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default  Counter;