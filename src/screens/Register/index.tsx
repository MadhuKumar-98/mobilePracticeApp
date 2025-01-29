import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { LeftArrow } from "@/src/assets/svg";

const Register = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCreateAccount = () => {
    navigation.replace("Home");
  };

  return (
    <View className="flex-1 justify-between">
      <View className="mx-4 mt-[40]">
        <LeftArrow onPress={handleGoBack} />
        <Text className="text-2xl mt-2 font-bold text-center">Register</Text>

        <View className="flex-row mt-[30] gap-x-3">
          <View className="flex-1">
            <Text>First Name</Text>
            <TextInput
              className="border border-[#d8d7d7] rounded mt-3 px-3 py-2 text-sm"
              placeholder="John"
              placeholderTextColor="#939292"
            />
          </View>
          <View className="flex-1">
            <Text>Last Name</Text>
            <TextInput
              className="border border-[#d8d7d7] rounded mt-3 px-3 py-2 text-sm"
              placeholder="Doe"
              placeholderTextColor="#939292"
            />
          </View>
        </View>

        <View className="mt-3">
          <Text>E-mail</Text>
          <TextInput
            className="border border-[#d8d7d7] rounded mt-3 px-3 py-2 text-sm"
            placeholder="Enter your email"
            placeholderTextColor="#939292"
          />
        </View>

        <View className="mt-3">
          <Text>Password</Text>
          <TextInput
            className="border border-[#d8d7d7] rounded mt-3 px-3 py-2 text-sm"
            placeholder="********"
            placeholderTextColor="#939292"
          />
        </View>

        <View className="mt-3">
          <Text>Confirm Password</Text>
          <TextInput
            className="border border-[#d8d7d7] rounded mt-3 px-3 py-2 text-sm"
            placeholder="********"
            placeholderTextColor="#939292"
          />
        </View>
      </View>

      <View className="mx-4 mb-[56]">
        <Pressable className="bg-[#2B8761] py-3 rounded-full" onPress={handleCreateAccount}>
          <Text className="text-center text-white ">Create Account</Text>
        </Pressable>
        <Text className="mx-4 text-xs text-center mt-3 text-[#616060]">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

export default Register;
