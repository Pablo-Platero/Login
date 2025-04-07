import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRefContext } from '@react-navigation/stack'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import StackNavigator from './src/navigation/StackNavigator'
import RegisterScreen from './src/screens/RegisterScreen'

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}} >
        <NavigationContainer>
        <StackNavigator />
        <RegisterScreen />
      </NavigationContainer>
     
    </GestureHandlerRootView>
    
   
  )
}

export default App
