import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Form from './AddExpense/Form';
import TotalBalanceHeader from './TotalBalanceHeader';
import TrackingGraph from './TrackingGraph';
import Transactions from './Transactions';

const Stack = createStackNavigator();

function Home({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <TotalBalanceHeader />
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        {/* Add Expense */}
        <TouchableOpacity onPress={() => navigation.navigate('AddExpense')}>
          <View style={{ backgroundColor: '#2C3335', height: 40, width: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../../assets/images/arrow-down-android-down-arrow.jpg')}
            />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Add Expense</Text>
          </View>
        </TouchableOpacity>

        {/* Add Income */}
        <TouchableOpacity onPress={() => navigation.navigate('AddIncome')}>

          <View style={{ backgroundColor: '#2C3335', height: 40, width: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../../assets/images/uparrow.png')}
            />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Add Income</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TrackingGraph />
      <Transactions />
    </ScrollView>
  );

}

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddExpense" component={Form} />
      <Stack.Screen name="AddIncome" component={Form} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
});
