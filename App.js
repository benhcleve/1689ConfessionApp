import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ChapterOne, ChapterTwo, ChapterThree } from "./screens";
import Sidebar from "./components/CustomDrawer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="Chapter 1" component={ChapterOne} />
      <Drawer.Screen name="Chapter 2" component={ChapterTwo} />
      <Drawer.Screen name="Chapter 3" component={ChapterThree} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
