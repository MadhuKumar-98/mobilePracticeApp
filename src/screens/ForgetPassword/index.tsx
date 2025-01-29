import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { LeftArrow } from "../../assets/svg";

const ForgotPassword = ({ navigation }) => {
  const handleSendOtp = () => {
    navigation.navigate("VerifyAccount");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View className="flex-1 justify-between">
      <View className="mx-4 mt-[40]">
        <LeftArrow onPress={handleGoBack} />
        <Text className="mt-3 text-2xl font-bold text-center">Forgot Password</Text>
        <Text className="mx-2 text-[13px] mt-2 text-[#475569] text-center">
          No worries! Enter your email address below and we will send you a code to reset password.
        </Text>
        <View className="mt-7">
          <Text>E-mail</Text>
          <TextInput
            className="border border-[#d8d7d7] rounded mt-3 px-3 py-2"
            placeholder="Enter your email"
            placeholderTextColor="#939292"
          />
        </View>
      </View>

      <View className="mx-4 mb-[56]">
        <Pressable className="bg-[#2B8761] py-3 rounded-full" onPress={handleSendOtp}>
          <Text className="text-center text-white">Send OTP</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ForgotPassword;
