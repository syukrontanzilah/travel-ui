import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Hotel from './pages/Hotel'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

const MainApp = () => {
  return (
    <Stack.Navigator
    initialRouteName="Profile"
    headerMode ="none">
      <Stack.Screen name="Hotel" component ={Hotel} />
      <Stack.Screen name="Profile" component ={Profile} />
    </Stack.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})
