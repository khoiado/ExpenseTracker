import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TotalBalanceHeader from './TotalBalanceHeader';
import AddExpense from './AddExpense';
import AddIncome from './AddIncome';
import TrackingGraph from './TrackingGraph';
import Transactions from './Transactions';
import React from 'react';

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <TotalBalanceHeader />
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <AddExpense />
        <AddIncome />
      </View>
      <TrackingGraph />
      <Transactions />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
