import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

// interface Item {
//   idMeal: number;
//   strMeal: string;
//   strMealThumb: string;
// }

const Items = ({ route }) => {
  const { categoryName } = route.params;
  const [items, setItems] = useState();

  useEffect(() => {
    fetchItemsByCategory();
  }, [categoryName]);

  const fetchItemsByCategory = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      //   console.log("Res", response.data.meals);
      setItems(response.data.meals);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderFoodItems = (item: any) => {
    return (
      <View className="flex-row justify-between border-b-[1px] border-b-gray-400 py-5">
        <View className="justify-evenly">
          <Text className="font-rubik500">{item.item.strMeal}</Text>
          <Text className="text-xs font-rubik500">
            Price: <Text className="text-sm text-[#454343] font-rubik400"> ₹ 500</Text>
          </Text>
          <Text className="text-xs text-[#454343] font-rubik400">Serves 2 persons</Text>
        </View>
        <View>
          <Image
            source={{ uri: item?.item?.strMealThumb }}
            style={{ width: 100, height: 100, borderRadius: 5 }}
          />
          {/* )} */}

          <View className="flex-row rounded bg-[#2aa471] self-center absolute -bottom-[10] py-1 px-2">
            <TouchableOpacity>
              <Text className="text-white text-xs font-rubik500">Add Item</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View className="mx-4 pb-[60]">
      <Text className="text-lg mt-5 underline font-rubik600">{categoryName}</Text>
      <FlatList
        data={items}
        renderItem={renderFoodItems}
        keyExtractor={(item) => item.idMeal.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Items;
