import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import { LeftArrow } from "@/src/assets/svg";

const VerifyAccount = ({ navigation }) => {
  const handleVerifyAccount = () => {
    navigation.replace("Home");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View className="flex-1 justify-between">
      <View className="mx-4 mt-[40]">
        <LeftArrow onPress={handleGoBack} />
        <Text className="mt-3 text-2xl font-bold text-center">Verify Account</Text>
        <Text className="mx-2 text-[13px] mt-2 text-[#475569] text-center">
          Code has been send to{" "}
          <Text className="text-[13px] text-black font-bold">abcdefg@gmail.com.</Text>
        </Text>
        <Text className="mx-2 text-[13px] mt-1 text-[#475569] text-center">
          Enter the code to verify your account.
        </Text>
        <View className="mt-7">
          <Text>Enter Code</Text>
          <TextInput
            className="border border-[#d8d7d7] rounded mt-3 px-3 py-2"
            placeholder="4 Digit Code"
            placeholderTextColor="#939292"
          />
        </View>
      </View>
      <View>
        <Text className="mx-2 text-[13px] mt-2 text-[#475569] text-center">
          Didn't Receive Code?{" "}
          <Text className="text-[13px] text-[#94A3B8] underline"> Resend Code</Text>
        </Text>
      </View>

      <View className="mx-4 mb-[56]">
        <Pressable className="bg-[#2B8761] py-3 rounded-full">
          <Text className="text-center text-white" onPress={handleVerifyAccount}>
            Verify Account
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VerifyAccount;
