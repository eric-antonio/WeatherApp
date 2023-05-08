import React from "react";
import { View , Text , Button , StyleSheet } from "react-native";
const Counter =()=>{
    let count = 0
    return(
        <View style={styles.container}>
            
            <Text>
                {`Count: ${count}`}
            </Text>

            <Button 
                color={'red'}
                title={'Increase the count'} 
                onPress={()=>{
                    count++
                    console.log(count)
                }} 
            />
            <Button 
                title={'Decrease the count '}
                color={'green'}
                onPress={()=>{
                    count--
                    console.log(count)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})
export default  Counter; 