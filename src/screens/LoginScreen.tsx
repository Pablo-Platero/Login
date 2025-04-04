import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

const LoginScreen = ({navigation}:any) => {
    //Estado para el usuario y contraseña
    const [usuario,setUsuario]=useState("");
    const [password,setPassword]=useState("");

    //Funcion para validar y redirigir
    const manejarLogin=()=>{
        //validar campos vacios
        if(!usuario||!password){
            Alert.alert("Error","Todos los campos son obligatorios")
            return;
        }
        //Simular la autenticacion
        if(usuario==="admin" && password==="1234"){
            navigation.navigate("Home",{user:usuario})
        }else{
            Alert.alert("Error","Credenciales incorrectas");
        }
    }
  return (

    <View>
   <TextInput placeholder='Usuario' style={styles.input}
    value={usuario} onChangeText={setUsuario}/>
        
    <TextInput placeholder='Contraseña' style={styles.input} secureTextEntry={true}
    value={password} onChangeText={setPassword}/>
    
    <Button title='Ingresar' onPress={manejarLogin}/>
    </View>

  )
}

const styles=StyleSheet.create({
    container:{padding:20,flex:1,justifyContent:"center"},
    title:{fontSize:24,fontWeight:"bold",marginBottom:20,textAlign:"center"},
    input:{
        borderWidth:1,borderColor:"#ccc",padding:10,marginBottom:10,justifyContent:"center"
    },
    button:{
        padding:10,backgroundColor:"black",color:"white",marginBottom:20,
    },
    

})

export default LoginScreen
