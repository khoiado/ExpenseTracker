import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"

export default function Form() {
    const [transactionName, setTransactionName] = useState('')
    const [transactionAmount, setTransactionAmount] = useState('')
    const [categories, setCategories] = useState(Array<String>)

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>Transaction name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTransactionName}
                    value={transactionName}
                />
                <Text>Transaction amount:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTransactionAmount}
                    value={transactionAmount}
                    keyboardType='numeric'
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <BouncyCheckbox
                    onPress={(isChecked: boolean) => {
                        console.log(isChecked)
                        if (isChecked) {
                            setCategories([...categories, 'Rent'])
                        } else {
                            setCategories(categories.filter(category => category !== 'Rent'))
                        }
                    }}
                    fillColor='#038aff'
                />
                <Text>Rent</Text>
                <BouncyCheckbox
                    onPress={(isChecked: boolean) => {
                        if (isChecked) {
                            setCategories([...categories, 'Food'])
                        } else {
                            setCategories(categories.filter(category => category !== 'Food'))
                        }
                    }}
                    fillColor='#038aff'
                />
                <Text>Food</Text>
                <BouncyCheckbox
                    onPress={(isChecked: boolean) => {
                        if (isChecked) {
                            setCategories([...categories, 'Shopping'])
                        } else {
                            setCategories(categories.filter(category => category !== 'Shopping'))
                        }
                    }}
                    fillColor='#038aff'
                />
                <Text>Shopping</Text>
                <BouncyCheckbox
                    onPress={(isChecked: boolean) => {
                        if (isChecked) {
                            setCategories([...categories, 'Something'])
                        } else {
                            setCategories(categories.filter(category => category !== 'Something'))
                        }
                    }}
                    fillColor='#038aff'
                />
                <Text>Something</Text>
                <BouncyCheckbox
                    onPress={(isChecked: boolean) => {
                        console.log(categories)
                    }}
                    fillColor='#038aff'
                />
            </View>
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