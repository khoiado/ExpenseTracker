import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IntervalBoxes from './IntervalBoxes'

export default function GraphHeader() {
    return (
        <View style = {{flexDirection: 'row', justifyContent:'space-between', margin: 30, alignItems: 'center'}}>
            <Text style = {{color: 'white', fontSize: 16, fontWeight: 'bold'}}>History</Text>
            <IntervalBoxes />
        </View>
    )
}

const styles = StyleSheet.create({})