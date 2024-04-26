import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/components/HomeScreen/AppNavigator'
import Form from './src/components/HomeScreen/AddExpense/Form'

export default function App() {
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
    
      <Form></Form>
  )
}

const styles = StyleSheet.create({})