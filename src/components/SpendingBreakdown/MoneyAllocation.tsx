//Preparing permanent stuff when file loads. Just needs to be done once
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';


export default function MoneyAllocation() {
    //Preparing data for components. Put here if data changes when component loads
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height

    const data = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 527612,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 8538000,
            color: "#ffffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        //Loading front-end components. Process data before loading component. Sending back component that makes up app
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <PieChart
                    paddingLeft='10'
                    data={data}
                    width={screenWidth}
                    height= {220}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    center={[screenWidth / 4, screenHeight / 100]}
                    absolute
                    hasLegend={false}
                />
            </View>
            <View style = {{flex: 2}}>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({})