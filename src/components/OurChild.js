import React from "react";
import { View, Text , StyleSheet} from "react-native";

const OurChild = (props) => {
    const {message} =  props
    return(
        <View style={styles.container}>
            <Text>{message}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:200,
        width:200 ,
        backgroundColor:'pink',
        justifyContent: 'center',
        alignItems:'center'
    }
})
export default OurChild;