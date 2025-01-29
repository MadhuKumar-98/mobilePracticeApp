import { View, Text, Image } from "react-native";
import React from "react";
import { Notification, HomeIcon } from "@/src/assets/svg";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";

const Home = () => {
  return (
    <View className="flex-1">
      <View className="mx-4 mt-3 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <HomeIcon />
          <View className="ml-2">
            <Text className="text-sm font-rubik500">Robert di Nero</Text>
            <Text className="text-xs font-rubik400">DLF street, Gachibowli, Hyd.</Text>
          </View>
        </View>
        <View>
          <Notification />
        </View>
      </View>

      <View className="mx-4 mt-5">
        <Carousel />
      </View>

      <View className="mx-4 mt-5">
        <Categories />
      </View>

      <View className="mx-4 mt-5">
        <Text className="mb-2 text-lg font-rubik500">Order now</Text>
        <Image
          source={require("../../assets/images/ordernow.png")}
          className="w-full rounded-lg h-[160]"
        />
      </View>
    </View>
    
  );
};

export default Home;
