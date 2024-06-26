import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import AccountInformation from '../SettingsScreen/AccountInformation'
import DisplaySettings from '../SettingsScreen/DisplaySettings'
import AccountBalance from '../SettingsScreen/AccountBalance'

//Creating a different folder called 'SettingsTab' that stores its own files (Screens)
const SettingsTab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <SettingsTab.Navigator>
            <SettingsTab.Screen name='Account Information' component={AccountInformation} />
            <SettingsTab.Screen name='Display Settings' component={DisplaySettings} />
            <SettingsTab.Screen name='Account Balance' component={AccountBalance} />
        </SettingsTab.Navigator>
    )
}

const styles = StyleSheet.create({})