import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}:any) => {
    //Estado para el usuario y contraseña
    const [usuario,setUsuario]=useState("");
    const [password,setPassword]=useState("");

    //Funcion para validar y redirigir
    const manejarLogin= async()=>{
        //validar campos vacios
        if(!usuario||!password){
            Alert.alert("Error","Todos los campos son obligatorios")
            return;
        }
        try{
            //Obtenemos el usuario guardado en AsyncStorage}}
            const userData=await AsyncStorage.getItem("usuario");
            const usuarios = userData?JSON.parse(userData):[];
            const usuario=usuarios.find((u:any)=>u.email===usuario && u.password===password);

            //validar si el usuario existe
            if(usuario){
                await AsyncStorage.setItem("usuario",JSON.stringify(usuario))
                navigation.navigate("Home",{user:usuario.nombre})
            }else{
                Alert.alert("Error","Usuario o contraseña incorrectos")
                return;
            }

            // if(userData){
            //     Alert.alert("Error","Usuario ya registrado")
            //     return;
            // }
            // const user=JSON.parse(userData||"{}");
            // //validar usuario y contraseña
            // if(usuario===user.nombre && password===user.password){
            //     Alert.alert("Exito","Bienvenido")
            //     navigation.navigate("Home");
            // }else{
            //     Alert.alert("Error","Usuario o contraseña incorrectos");
            // }
        }catch(error){
            Alert.alert("Error","No se pudo acceder a los datos");
        }
        //Simular la autenticacion
    }
  return (
  
    <View>
   <TextInput placeholder='Usuario' style={styles.input}
    value={usuario} onChangeText={setUsuario}/>
        
    <TextInput placeholder='Contraseña' style={styles.input} secureTextEntry={true}
    value={password} onChangeText={setPassword}/>
    
    <Button title='Ingresar' onPress={manejarLogin}/>
    <TouchableOpacity onPress={{}=navigation.navigate('Register')}>
      <Text style={styles.registerText}>No tienes cuenta? Registrate</Text>
    </TouchableOpacity>
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
    registerText:{
        marginTop:20,
        textAlign:"center",
        color:"#0066cc",
        textDecorationLine:"underline"
    },
    

})

export default LoginScreen
