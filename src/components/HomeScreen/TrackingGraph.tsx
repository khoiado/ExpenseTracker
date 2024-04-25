import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import IntervalBoxes from './IntervalBoxes';
import GraphHeader from './GraphHeader';


export default function TrackingGraph() {

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#000000",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#000000",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 6 // optional
      }
    ],
  };

  //console.log(chartConfig);

  return (
    //use flash list here
    <>
    <GraphHeader/>
      <LineChart
        data={data}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
      <Text>TrackingGraph</Text>
    </>
  )
}

const styles = StyleSheet.create({})