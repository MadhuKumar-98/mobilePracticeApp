import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

interface Item {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
}

const Categories = () => {
  const [categories, setCategories] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      //   console.log("Res", response.data.categories);
      setCategories(response.data.categories);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity
      className="items-center rounded-xl bg-slate-100 "
      onPress={() => navigation.navigate("Items", { categoryName: item.strCategory })}
      style={{
        shadowColor: "A4A5B0",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 3,
      }}
    >
      <View className=" bg-[#84af9d] py-3 px-3 rounded-t-xl">
        <Image source={{ uri: item.strCategoryThumb }} className="h-[80] w-[80]" />
      </View>
      <Text className="py-1 font-rubik600">{item.strCategory}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View className="flex-row justify-between items-center">
        <Text className="mb-2 text-lg font-rubik500">Categories</Text>
        <Text className="mr-3 px-[10] py-1 text-[#135037] bg-[#90c7b0] rounded-full text-xs font-rubik400">See all</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.idCategory.toString()}
        contentContainerStyle={{ columnGap: 20, marginTop: 8, paddingVertical: 2 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
