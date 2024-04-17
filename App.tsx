import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TotalBalanceHeader from './src/components/TotalBalanceHeader';
import AddExpense from './src/components/AddExpense';
import AddIncome from './src/components/AddIncome';
import TrackingGraph from './src/components/TrackingGraph';
import Transactions from './src/components/Transactions';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <TotalBalanceHeader />
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <AddExpense />
        <AddIncome />
      </View>
      <TrackingGraph/>
      <Transactions/>
    </View>
  );
}

const styles = StyleSheet.create({
});
