import React from "react";
import { SafeAreaView,
    View ,
    Text, 
    StyleSheet,
    FlatList, 
    StatusBar,
    ImageBackground} from "react-native";
import {Feather} from '@expo/vector-icons';
import ListItem from "../components/ListItem";

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

/*
 * Aqui temos oa funcção que faz a renderização das listas
   ! Pega cada objecto ou item da lista e exibe.
*/
const UpcomingWeather =()=>{
    const renderItem =({item})=>(
        <ListItem  
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt} 
            min={item.main.temp_min} 
            max={item.main.temp_max} 
        />
    )
    //* Simplificando a nossa forma de estilizar!
    const {container , image , title} = styles


    //! Temos o retorno da informação disposto da seguinte maneira.
    return(
        <SafeAreaView style={container}>
            { /* 
                * 1- ImageBackground : Temos a imagem de fundo da Tela.
                * 2- Text : Apenas o titulo da nossa Pagina.
                ? 3- FlatList : Passos:
                    * Pega o nosso array , que contem os dados a serem exibidos!
                    ! RenderItem : Aqui faz referencia a que lista renderizar , ou seja a ListItem criada a cima.
                    * KeyExtractor : Vamos chamar de chave unica para diferenciar a informação. 
             */
            }
            <ImageBackground
                source={require('../../assets/upcoming-background.jpg')}
                style={image}
            >

                <Text style={title}>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item)=> item.dt_txt}
                />

            </ImageBackground>
        </SafeAreaView>
    )
}

//* Temos aqui o nosso CSS
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
    image:{
       flex:1
    }

})

export default UpcomingWeather;