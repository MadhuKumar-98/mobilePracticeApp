import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";

const TooltipTestScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View style={styles.container}>
        0
      <Tooltip
        accessible={true}
        isVisible={true}
        useInteractionManager={true}
        content={
          <View>
            <Text>Top Title Textmdlkmvclkcxm lcx lcxl </Text>
          </View>
        }
        // contentStyle={{ backgroundColor: "red" , padding: 10, borderRadius: 10, width: 100, height: 100 , justifyContent: "center", alignItems: "center" }}
        // showChildInTooltip={false}
        // tooltipStyle={{ backgroundColor: "red" , padding: 10, borderRadius: 10, width: 120, height: 130,justifyContent: "center", alignItems: "center" }}
        placement="bottom"
        // childrenWrapperStyle={{ backgroundColor: "red" , padding: 10, borderRadius: 10, width: 100, height: 100 }}
        // childContentSpacing={20}
        onClose={() => setIsVisible(false)}
        backgroundStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        displayInsets={{ top: 24, bottom: 24, left: 0, right: 0 }}
      >
        <Text style={[styles.text, styles.topText]}>Top Title Text</Text>
      </Tooltip>

      {/* <Tooltip
        accessible={true}
        isVisible={false}
        content={
          <View className="bg-red-200">
            <Text>Centered Text</Text>
          </View>
        }
        placement="bottom"
        childContentSpacing={20}
        onClose={() => setIsVisible(false)}
        closeOnChildInteraction={false}
        backgroundStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        closeOnBackgroundInteraction={false}
        // displayInsets={{ top: 24, bottom: 24, left: 24, right: 24 }}
      >
        <Text style={[styles.text, styles.centerText]}>Centered Text</Text>
      </Tooltip> */}

      {/* <Tooltip
        isVisible={isVisible}
        accessible={true}
        content={<Text>Left side </Text>}
        placement="bottom"
        arrowSize={{ width: 50, height: 15 }}
        // childContentSpacing={20}
        onClose={() => setIsVisible(false)}
        closeOnChildInteraction={false}
        backgroundStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        useReactNativeModal={false}
      >
        <Text style={[styles.text, styles.leftText]}>Left side text</Text>
      </Tooltip> */}

      {/* <Tooltip
        accessible={true}
        // isVisible={isVisible}
        content={<Text>Right side text</Text>}
        placement="bottom"
        childContentSpacing={20}
        onClose={() => setIsVisible(false)}
        closeOnChildInteraction={false}
        backgroundStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        useReactNativeModal={false}
        //    displayInsets={{ top: 24, bottom: 24, left: 24, right: 24 }}
      >
        <Text style={[styles.text, styles.rightText]}>Right side text</Text>
      </Tooltip> */}
      <Text style={[styles.text, styles.bottomLeftText]}>Bottom Left Text</Text>
      <Text style={[styles.text, styles.bottomRightText]}>Bottom Right Text</Text>

      <TouchableOpacity style={styles.button} onPress={() => setIsVisible(true)}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  topText: {
    // alignSelf: "center",
    marginTop: 20,
  },
  centerText: {
    alignSelf: "center",
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  leftText: {
    position: "absolute",
    left: 10,
    top: "30%",
  },
  rightText: {
    position: "absolute",
    right: 10,
    top: "30%",
  },
  bottomLeftText: {
    position: "absolute",
    bottom: 50,
    left: 10,
  },
  bottomRightText: {
    position: "absolute",
    bottom: 50,
    right: 10,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default TooltipTestScreen;
