import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function IntervalBoxes() {
    return (
        // Make button only highlight white when selected
        //Make boxes spaced evenly from each other
        <View style={{ flexDirection: 'row'}}>
            <View style={styles.container}>
                <Text style={styles.text}>7D</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>1M</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>1Y</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black'
    }
})