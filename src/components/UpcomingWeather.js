import React from "react";
import { SafeAreaView,View ,Text, StyleSheet,FlatList} from "react-native";

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

const Item = ()=>{
    return(
        
    )
}
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