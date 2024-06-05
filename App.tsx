import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Form from './src/components/HomeScreen/AddExpense/Form'
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import BreakdownScreen from './src/components/SpendingBreakdown/BreakdownScreen';
import SettingsScreen from './src/components/SettingsScreen/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name="Breakdown Screen" component={BreakdownScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})