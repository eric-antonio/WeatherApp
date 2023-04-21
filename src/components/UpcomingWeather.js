import React from "react";
import { SafeAreaView,View ,Text, StyleSheet,FlatList, StatusBar} from "react-native";
import {Feather} from '@expo/vector-icons'

// ? Data ou o nosso array.
const DATA = [
    {
        dt_txt:"2023-02-18 12:00:00",
        main:{
            temp_max:8.55,
            temp_min:7.55
        },
        weather:[{
            main:'Clear'
        }]
    },
    {
        dt_txt:"2023-02-18 15:00:00",
        main:{
            temp_max:8.55,
            temp_min:7.55
        },
        weather:[{
            main:'Clouds'
        }]
    },
    {
        dt_txt:"2023-02-18 18:00:00",
        main:{
            temp_max:8.55,
            temp_min:7.55
        },
        weather:[{
            main:'Rain'
        }]
    }
]

// * tempos aqui as props juntamente com o componente  a ideia aqui é fazer a ligação entre o array e o componente (não entendi muito bem , irei tentar ver bem depois na resolução)

// ?Video pausado no tempo : 1:04:35/4:40H
const Item = (props)=>{
    const { dt_txt, min , max ,condition }=props
    return(
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>

        </View>
    )
}


//! The component 
const UpcomingWeather =()=>{
    // * componente que vai renderizar os dados!
    const renderItem =({item})=>(
        <Item  
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt} 
            min={item.main.temp_min} 
            max={item.main.temp_max} 
        />
    )

    // ? O restor da app que tem o componente com os dados.
    return(
        <SafeAreaView style={styles.container}>

            <Text>Upcoming Weather</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item)=> item.dt_txt}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'grey'
    },
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16
    }
})

export default UpcomingWeather;