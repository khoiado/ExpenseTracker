import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Transactions() {

  const transactionIds = [
    {
      id: 1,
      transactionName: 'Food',
      transactionDate: '4/17/2024',
      transactionTime: '10:24',
      transactionAmount: 200,
      Image: 'https://picsum.photos/200/300',
      subscriptionsImage: '',
      billsImage: '',
      miscellaneousImage: '',
    },
    {
      id: 2,
      transactionName: 'Food',
      transactionDate: '4/17/2024',
      transactionTime: '10:24',
      transactionAmount: 200,
      Image: 'https://picsum.photos/200/300',
      subscriptionsImage: '',
      billsImage: '',
      miscellaneousImage: '',
    },
    {
      id: 3,
      transactionName: 'Food',
      transactionDate: '4/17/2024',
      transactionTime: '10:24',
      transactionAmount: 200,
      Image: 'https://picsum.photos/200/300',
      subscriptionsImage: '',
      billsImage: '',
      miscellaneousImage: '',
    },
    {
      id: 4,
      transactionName: 'Food',
      transactionDate: '4/17/2024',
      transactionTime: '10:24',
      transactionAmount: 200,
      Image: 'https://picsum.photos/200/300',
      subscriptionsImage: '',
      billsImage: '',
      miscellaneousImage: '',
    }
  ]

  return (
    //Use flashlist here
    <View>
      {transactionIds.map((information) => (
        <>
          <View key={information.id} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.smallImage}
                source={{ uri: information.Image }}
              />
              <View>
                <Text style={{ color: 'white' }}>{information.transactionName}</Text>
                <Text style={{ color: 'white' }}>{information.transactionDate + information.transactionTime}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ color: 'white' }}>{information.transactionAmount}</Text>
            </View>
          </View>
        </>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  smallImage: {
    width: 40,
    height: 40
  }
})