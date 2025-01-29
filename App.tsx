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

const Stack = createNativeStackNavigator();

function App() {
  const [loaded, error] = useFonts({
    Rubik_300: require("./src/assets/fonts/Rubik-Light.ttf"),
    Rubik_400: require("./src/assets/fonts/Rubik-Regular.ttf"),
    Rubik_500: require("./src/assets/fonts/Rubik-Medium.ttf"),
    Rubik_600: require("./src/assets/fonts/Rubik-SemiBold.ttf"),
    Rubik_700: require("./src/assets/fonts/Rubik-Bold.ttf"),
  });

  if (!error && !loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
        <Stack.Screen name="Items" component={Items} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
