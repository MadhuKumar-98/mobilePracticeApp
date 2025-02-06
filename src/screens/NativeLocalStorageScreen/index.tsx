import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from "react-native";

import NativeLocalStorage from "../../../specs/NativeLocalStorage";

function NativeLocalStorageScreen(): React.JSX.Element {
  const [key, setkey] = useState<string>();
  const [value, setValue] = React.useState<string>();
  const [getValuebyKey, setGetValuebyKey] = React.useState<string>();
  const [fromStore, setFromStore] = React.useState<string>();

  function saveValue() {
    NativeLocalStorage?.setItem(value, key);
    setkey("");
    setValue("");
    setGetValuebyKey("");
  }

  function clearAll() {
    NativeLocalStorage?.clear();
    setkey("");
    setValue("");
    setGetValuebyKey("");
  }

  function deleteValue() {
    NativeLocalStorage?.removeItem(getValuebyKey);
    setkey("");
    setValue("");
    setGetValuebyKey("");
  }

  function getItem() {
    const value = NativeLocalStorage?.getItem(getValuebyKey);
    setFromStore(value);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 justify-center mx-3">
        <Text style={styles.text}>Current stored value is: {fromStore ?? "No Value"}</Text>
        <Text>setKey</Text>
        <TextInput
          placeholder="Enter the text you want to store"
          value={key}
          style={styles.textInput}
          onChangeText={(text) => setkey(text)}
        />
        <Text>setValue</Text>
        <TextInput
          value={value}
          placeholder="Enter the text you want to store"
          style={styles.textInput}
          onChangeText={(text) => setValue(text)}
        />
        <Text>getValueByKey</Text>
        <TextInput
          value={getValuebyKey}
          placeholder="Enter the key"
          style={styles.textInput}
          onChangeText={(text) => setGetValuebyKey(text)}
        />
        <View>
          <Button title="Save" onPress={saveValue} />
          <Button title="Delete" onPress={deleteValue} />
          <Button title="Clear" onPress={clearAll} />
          <Button title="Get Item" onPress={getItem} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});

export default NativeLocalStorageScreen;
