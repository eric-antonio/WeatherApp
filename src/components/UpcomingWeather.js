import React from "react";
import { SafeAreaView,View ,Text, StyleSheet,FlatList} from "react-native";

const UpcomingWeather =()=>{
    return(
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default UpcomingWeather;