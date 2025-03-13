import { View, Text, ScrollView } from "react-native";
import React from "react";
import { BarChart, PieChart } from "react-native-gifted-charts";

const barData = [
  { value: 20, label: "M" },
  { value: 30, label: "T" },
  {
    value: 50,
    label: "W",
    topLabelComponent: () => <Text style={{ color: "blue", fontSize: 10 }}>50</Text>,
  },
  { value: 40, label: "T" },
  { value: 30, label: "F" },
];
const barData2 = [
  { value: 0.6, label: "3" },
  { value: 0.4, label: "4" },
  { value: 0.6, label: "3" },
  { value: 0.4, label: "4" },
  { value: 0.9, label: "5" },
  { value: 0.7, label: "6" },
  { value: -0.7, label: "7" },
  { value: -0.3, label: "8" },
];

const barData3 = [
  {
    value: 40,
    label: "Jan",
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: "gray" },
    frontColor: "#177AD5",
  },
  { value: 20, frontColor: "#ED6665" },
  {
    value: 50,
    label: "Feb",
    spacing: 2,
    labelWidth: 24,
    labelTextStyle: { color: "gray" },
    frontColor: "#177AD5",
  },
  { value: 40, frontColor: "#ED6665" },
  {
    value: 75,
    label: "Mar",
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: "gray" },
    frontColor: "#177AD5",
  },
  { value: 25, frontColor: "#ED6665" },
  {
    value: 30,
    label: "Apr",
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: "gray" },
    frontColor: "#177AD5",
  },
  { value: 20, frontColor: "#ED6665" },
  {
    value: 60,
    label: "May",
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: "gray" },
    frontColor: "#177AD5",
  },
  { value: 40, frontColor: "#ED6665" },
  {
    value: 65,
    label: "Jun",
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: { color: "gray" },
    frontColor: "#177AD5",
  },
  { value: 30, frontColor: "#ED6665" },
];

const pieData = [
  { value: 54, color: "#177AD5", text: "54%" },
  { value: 40, color: "#79D2DE", text: "30%" },
  { value: 20, color: "#ED6665", text: "26%",focused: true, },
];

const GraphsAndCharts = () => {
  const renderTitle = () => {
    return (
      <View style={{ marginVertical: 30 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Chart title goes here
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 24,
            backgroundColor: "yellow",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#177AD5",
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
                color: "lightgray",
              }}
            >
              Point 01
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#ED6665",
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
                color: "lightgray",
              }}
            >
              Point 02
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView className="flex-1 mx-2">
      <Text>GraphsAndCharts</Text>
      <View>
          <PieChart
            donut
            // isThreeD
            // shadow
            // shadowColor="lightgray"
            // shadowWidth={10}
            innerCircleBorderWidth={3}
            innerCircleBorderColor="lightgray"
            // showText
            strokeWidth={3}
            focusOnPress
            textColor="black"
            radius={100}
            innerRadius={70}
            // sectionAutoFocus
            // textSize={20}
            showTextBackground
            // textBackgroundRadius={26}
            data={pieData}
            // shiftInnerCenterX={-10}
            // shiftInnerCenterY={-15}
            // toggleFocusOnPress={false}
            isAnimated
          />
        </View>
      <View className="">
        <View className="border">
          <BarChart
            data={barData}
            frontColor={"#BEBEBE"}
            barWidth={20}
            barBorderColor={"blue"}
            barBorderRadius={2}
            barBorderWidth={2}
            // noOfSections={4}
            // stepValue={5}
            // stepHeight={20}
            // // maxValue={50}
            // maxValue = {4 * 5}
          />
          <Text>GraphsAndCharts</Text>
        </View>
        <View className="mt-4">
          <BarChart
            showFractionalValues
            showYAxisIndices
            showXAxisIndices
            hideRules
            noOfSections={5}
            data={barData2}
            showGradient
            frontColor={"#1B6BB0"}
            gradientColor={"#BEBEBE"}
            backgroundColor={"#FECF9E"}
            labelsDistanceFromXaxis={3}
            autoShiftLabels={true}
            showScrollIndicator={true}
            isThreeD
            isAnimated
            // horizontal
          />
        </View>
        <View
          style={{
            backgroundColor: "#333340",
            paddingBottom: 40,
            borderRadius: 10,
            marginTop: 40,
          }}
        >
          {renderTitle()}
          <BarChart
            data={barData3}
            barWidth={12}
            spacing={22}
            roundedTop
            roundedBottom
            hideRules
            xAxisThickness={0}
            yAxisThickness={0}
            yAxisTextStyle={{ color: "gray" }}
            noOfSections={3}
            maxValue={75}
          />
        </View>
        
      </View>
    </ScrollView>
  );
};

export default GraphsAndCharts;
