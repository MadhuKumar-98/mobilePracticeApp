import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, Text, View, ImageSourcePropType } from "react-native";
interface CarouselItem {
  id: number;
  image: ImageSourcePropType;
}
interface ScrollEvent {
  nativeEvent: {
    contentOffset: {
      x: number;
    };
  };
}

const carouselData: CarouselItem[] = [
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
  const flatlistref = useRef<FlatList<CarouselItem> | null>(null);

  useEffect(() => {
    let interval = setInterval(() => {
      if (flatlistref.current) {
        if (activeIndex === carouselData.length - 1) {
          // setActiveIndex(0);
          flatlistref.current.scrollToIndex({
            index: 0,
            animated: true,
          });
        } else {
          // setActiveIndex(activeIndex + 1);
          flatlistref.current.scrollToIndex({
            index: activeIndex + 1,
            animated: true,
          });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (_: any, index: number) => {
    // console.log("getItemLayout", index, data);
    return {
      length: screenWidth,
      offset: screenWidth * index,
      index: index,
    };
  };

  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View>
        <Image source={item.image} style={{ width: screenWidth, height: 170, borderRadius: 10 }} />
      </View>
    );
  };

  const handleScroll = (event: ScrollEvent) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition) / Math.floor(screenWidth);
    setActiveIndex(Math.floor(index));
  };

  return (
    <View>
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
          return (
            <View
              key={index}
              className={`${
                activeIndex === index ? "bg-[#2B8761] w-[20]" : "bg-[#c4ddd2] w-[10]"
              } h-[10] rounded mx-1`}
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;
