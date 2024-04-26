import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"

export default function Form() {
    const [transactionName, setTransactionName] = useState('')
    const [transactionAmount, setTransactionAmount] = useState('')
    const [categories, setCategories] = useState(Array<String>)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={styles.input}
                onChangeText={setTransactionName}
                value={transactionName}
            />
            <TextInput
                style={styles.input}
                onChangeText={setTransactionAmount}
                value={transactionAmount}
                keyboardType='numeric'
            />

       {/*L = [1,2,3]

    R = [L, 4]    # [[1,2,3],4]
    R = [...L, 4] # [1,2,3,4]*/}

            <BouncyCheckbox
                onPress={(isChecked: boolean) => {
                    setCategories([...categories, 'Rent'])
                    console.log(categories)
                }}
                fillColor='#038aff'
            />
            <BouncyCheckbox
            onPress={(isChecked: boolean) => {
                setCategories([...categories, 'Food'])
            }}
                fillColor='#038aff'
            />
            <BouncyCheckbox
            onPress={(isChecked: boolean) => {
                setCategories([...categories, 'Shopping'])
            }}
                fillColor='#038aff'
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