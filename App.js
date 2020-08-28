import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ChapterOne, ChapterTwo, ChapterThree } from "./screens";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerUI() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerType={"front"} drawerStyle={{ width: "50%" }}>
        <Drawer.Screen name="Chapter 1" component={ChapterOne} />
        <Drawer.Screen name="Chapter 2" component={ChapterTwo} />
        <Drawer.Screen name="Chapter 3" component={ChapterThree} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <DrawerUI />
    </View>
  );
}
