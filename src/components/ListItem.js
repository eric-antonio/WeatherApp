import React from "react";
import { View, Text , StyleSheet} from "react-native";
import {Feather}  from '@expo/vector-icons';

/* 
?   Modelo de exibição das listas.
?   temos aqui apenas uma View com 3 Text para dispor a informação
*/

const ListItem = (props)=>{
    const { dt_txt, min , max ,condition }= props
    const {date, temp, item}= styles
    return(
        <View style={item}>
            
            <Feather name={'sun'} size={50} color={'#fffafa'}/>
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>

        </View>
    )
}

const styles =  StyleSheet.create({
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        borderWidth : 5,
        backgroundColor:'#87cefa'
    },temp:{
        color:'#f5f5f5',
        fontSize:20
    },
    date:{
        color:'#fffafa',
        fontSize:15
    },
})
export default ListItem; 