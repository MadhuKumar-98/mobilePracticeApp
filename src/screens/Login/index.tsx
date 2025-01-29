import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { GoogleIcon } from "@/src/assets/svg";
import { useNavigation } from "@react-navigation/native";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.replace("Home");
  };
  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  const handleGoToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View className="flex-1 justify-between">
      <View className="mx-4 mt-[60]">
        <Text className="text-2xl font-bold text-center">Login</Text>
        <View className="mt-[40]">
          <Text>E-mail</Text>
          <TextInput
            className="border border-[#d8d7d7] rounded mt-3 px-3 py-2"
            placeholder="Enter your email"
            placeholderTextColor="#939292"
          />
        </View>
        <View className="mt-3">
          <Text>E-mail</Text>
          <TextInput
            className="border border-[#d8d7d7] rounded mt-3 px-3 py-2 text-sm"
            placeholder="Enter your email"
            placeholderTextColor="#939292"
          />
        </View>
        <View className="mt-3 items-end">
          <Text className="text-xs text-[#3C9AFB] underline" onPress={handleForgotPassword}>
            Forget Password?
          </Text>
        </View>

        <View className="mt-12">
          <Pressable className="bg-[#2B8761] py-3 rounded-full" onPress={handleLogin}>
            <Text className="text-center text-white ">Login</Text>
          </Pressable>
        </View>
        <View className="flew-row justify-center items-center mt-3">
          <Text className=" text-xs text-center text-[#616060]" onPress={handleGoToRegister}>
            Register
          </Text>
        </View>
      </View>

      <View className="mx-4 mb-[56]">
        <Text className="text-center text-[#939292]">or login with</Text>
        <Pressable className="border py-3 border-[#d8d7d7] rounded-full mt-5 flex-row justify-center items-center">
          <GoogleIcon height={20} width={20} />
          <Text className="pl-2">Login with Google</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
