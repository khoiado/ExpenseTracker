import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function AddExpense() {
    return (
        <View style={{ backgroundColor: '#2C3335', height: 40, width: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image
                style={{ width: 30, height: 30 }}
                source={require('../../../assets/images/arrow-down-android-down-arrow.jpg')}
            />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Add Expense</Text>
        </View>
    )
}

const styles = StyleSheet.create({})