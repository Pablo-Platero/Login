import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';

const HomeScreen = ({route}:any) => {
    const {user} = route.params;//Extraer el usuario desde Params
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Bienvenido,{user}</Text>

    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        textAlign:  "center",
        alignContent:"center",
    },
    text:{
        fontSize:22
    }
})

export default HomeScreen
