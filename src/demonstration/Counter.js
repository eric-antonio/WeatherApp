import React , {useState} from "react";
import { View , Text , Button , StyleSheet } from "react-native";
const Counter =()=>{
    const [count , setCount] =  useState(0)
    return(
        <View style={styles.container}>

            <Text style={styles.title}>
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
                onPress={()=>count--}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange'

    },
    title:{
        alignSelf:'center',
        fontSize:25,
        marginTop: 25
    }

})
export default  Counter; 