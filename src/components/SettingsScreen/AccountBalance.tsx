import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function AccountBalance() {

    const [text, setText] = useState('');


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Set Account Balance</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})