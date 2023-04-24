import React from "react";
import { View, Text } from "react-native";
import {Feather}  from '@expo/vector-icons';


const Item = (props)=>{
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
