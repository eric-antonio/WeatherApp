import React from "react";
import { View, Text } from "react-native";

const OurChild = (props) => {
    const {message} =  props
    return(
        <View style={{height:200, width:200 , backgroundColor:'pink'}}>
            <Text>{message}</Text>

        </View>
    )
}

export default OurChild;