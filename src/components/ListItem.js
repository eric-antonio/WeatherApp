import React from "react";
import { View, Text , StyleSheet} from "react-native";
import {Feather}  from '@expo/vector-icons';

//?Modelo de exbibição da lista
const ListItem = (props)=>{
    const { dt_txt, min , max ,condition }=props
    return(
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'#fffafa'}/>
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>

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