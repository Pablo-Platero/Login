import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';

const HomeScreen = ({route,navigation}:any) => {
    const {user} = route.params;//Extraer el usuario desde Params

    //Funcion para cerrar sesion
    const cerrarSesion=async()=>{
        try{
            await AsyncStorage.removeItem("usuario")
            navigation.replace("Login")
        }catch(error){
            Alert.alert("Error","No se pudo cerrar sesión")
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Bienvenido,{user}</Text>

        <Button title='Cerrar Sesion'  onPress={cerrarSesion} color="red"></Button>

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
