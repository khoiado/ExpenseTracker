import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TotalBalanceHeader() {
    return (
        <SafeAreaView>
            <ImageBackground
                style={{ height: 150, margin: 20, justifyContent: 'center', alignItems: 'center' }}
                imageStyle={{ borderRadius: 20 }}
                source={require('../../../assets/images/vibrantbg.avif')}
            >
                <Text style={{ color: 'white' }}>Total Balance</Text>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>$38000</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})