import React from "react";
import { SafeAreaView,
    View ,
    Text, 
    StyleSheet,
    FlatList, 
    StatusBar,
    ImageBackground} from "react-native";
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
            {/* Placing the  Background IMG */}
            <ImageBackground
                source={require('../../assets/upcoming-background.jpg')}
                style={styles.image}
            >
                <Text style={styles.title}>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item)=> item.dt_txt}
                />

            </ImageBackground>
        </SafeAreaView>
    )
}
// * Here we h'got the CSS 

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'#00bfff'
    },
    title:{
        color: 'white',
        textAlign:'center',
        fontSize:22,
        margin: 10
    },
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
    image:{
       flex:1
    }

})

export default UpcomingWeather;