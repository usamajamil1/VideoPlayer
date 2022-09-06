import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import Videoplayer from "./screens/uesfullscreens/Videoplayer";
import Videoscreenuser from "./screens/videoscreen/Videoscreenuser";
import MyComponent from "./screens/uesfullscreens/MyComponent";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Videoscreenuser"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={Videoplayer} name="Videoplayer" />
        <Stack.Screen component={Videoscreenuser} name="Videoscreenuser" />
        <Stack.Screen component={MyComponent} name="MyComponent" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}