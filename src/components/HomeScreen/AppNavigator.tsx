import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BreakdownScreen from '../SpendingBreakdown/BreakdownScreen'
import React from 'react'
import MainScreen from './MainScreen'
import SettingsScreen from '../SettingsScreen/SettingsScreen'

//Creating a folder called 'Tab' that stores multiple files (Screens)
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={MainScreen} />
            <Tab.Screen name="Breakdown Screen" component={BreakdownScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
    )

}

const styles = StyleSheet.create({})