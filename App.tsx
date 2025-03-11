import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import ForgotPassword from "./src/screens/ForgetPassword";
import VerifyAccount from "./src/screens/VerifyAccount";
import Items from "./src/screens/Items";
import { useFonts } from "expo-font";
import { initializeApp, getApp, getApps } from "@react-native-firebase/app";
import GeneratePDF from "./src/screens/GeneratePdf";
import NativeLocalStorageScreen from "./src/screens/NativeLocalStorageScreen";
import TextToSpeech from "./src/screens/TextToSpeech";
import TooltipTestScreen from "./src/screens/VerifyAccount/ToolTip";
import Constants from "expo-constants";

const Stack = createNativeStackNavigator();

function App() {
  const [loaded, error] = useFonts({
    Rubik_300: require("./src/assets/fonts/Rubik-Light.ttf"),
    Rubik_400: require("./src/assets/fonts/Rubik-Regular.ttf"),
    Rubik_500: require("./src/assets/fonts/Rubik-Medium.ttf"),
    Rubik_600: require("./src/assets/fonts/Rubik-SemiBold.ttf"),
    Rubik_700: require("./src/assets/fonts/Rubik-Bold.ttf"),
  });

  const firebaseConfig = {
    apiKey: "AIzaSyCzBPVkLQXZLd3kACTAdT3SjuZOsKAbEzc",
    projectId: "fir-storage-f513a",
    storageBucket: "fir-storage-f513a.firebasestorage.app",
    messagingSenderId: "438822709273",
    appId: "1:438822709273:android:aacef93169311788d0e288",
  };

  if (!getApps().length) {
    initializeApp(firebaseConfig);
  } else {
    getApp(); 
  }

  if (!error && !loaded) {
    return null;
  }

  console.log('Constants:', Constants.expoConfig?.extra);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TooltipTestScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
        <Stack.Screen name="Items" component={Items} />
        <Stack.Screen name="GeneratePdf" component={GeneratePDF} />
        <Stack.Screen name="NativeLocalStorageScreen" component={NativeLocalStorageScreen} />
        <Stack.Screen name="TextToSpeech" component={TextToSpeech} />
        <Stack.Screen name="TooltipTestScreen" component={TooltipTestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
