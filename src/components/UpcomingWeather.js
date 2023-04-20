import React from "react";
import { SafeAreaView,View ,Text, StyleSheet,FlatList} from "react-native";

// ? Data ou o nosso array
const DATA = [
    {
        dtx_txt:"2023-02-18 12:00:00",
        main:{
            temp_max:8.55,
            temp_min:7.55
        },
        weather:[{
            main:'Clear'
        }]
    },
    {
        dtx_txt:"2023-02-18 15:00:00",
        main:{
            temp_max:8.55,
            temp_min:7.55
        },
        weather:[{
            main:'Clouds'
        }]
    },
    {
        dtx_txt:"2023-02-18 18:00:00",
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
    const { dtx_txt, main , max ,condition }=props
    return(
        <View>

        </View>
    )
}


//! The component 
const UpcomingWeather =()=>{
    return(
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default UpcomingWeather;