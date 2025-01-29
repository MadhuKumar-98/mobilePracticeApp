import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

const carouselData = [
  {
    id: 1,
    image: require("../../../assets/images/banner.png"),
  },
  {
    id: 2,
    image: require("../../../assets/images/banner2.png"),
  },
  {
    id: 3,
    image: require("../../../assets/images/banner.png"),
  },
  {
    id: 4,
    image: require("../../../assets/images/banner2.png"),
  },
];

const Carousel = () => {
  const screenWidth = Dimensions.get("screen").width - 32;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistref = useRef<FlatList>();

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistref.current.scrollToIndex({
          index: 0,
          animation: true,
        });
        // setActiveIndex(0);
      } else {
        flatlistref.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
        // setActiveIndex((prevIndex) => prevIndex + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (_, index) => {
    // console.log("getItemLayout", index, data);
    return {
      length: screenWidth,
      offset: screenWidth * index,
      index: index,
    };
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={{ width: screenWidth, height: 170, borderRadius: 10 }} />
      </View>
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // console.log("scrollPosition", Math.floor(scrollPosition));
    // console.log("screenWidth", Math.floor(screenWidth));

    const index = Math.floor(scrollPosition) / Math.floor(screenWidth);
    setActiveIndex(Math.floor(index));
  };

  // console.log("activeIndex", activeIndex);

  return (
    <View>
      {/* <Text className="mb-3 text-lg font-rubik500">Carousel</Text> */}
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
        ref={flatlistref}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
      />
      <View className="flex-row justify-center items-center mt-3">
        {carouselData.map((_, index) => {
          if (activeIndex === index) {
            return <View key={index} className="bg-[#2B8761] h-[10] w-[20] rounded mx-1"></View>;
          } else {
            return <View key={index} className="bg-[#c4ddd2] h-[10] w-[10] rounded mx-1"></View>;
          }
        })}
      </View>
    </View>
  );
};

export default Carousel;
