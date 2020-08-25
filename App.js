import "react-native-gesture-handler";
import React from "react";
import { Button, View, Text, ScrollView } from "react-native";
import { createDrawerNavigator, useIsDrawerOpen } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { ChapterOne, ChapterTwo, ChapterThree } from "./screens";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Chapter 1" component={ChapterOne} />
        <Drawer.Screen name="Chapter 2" component={ChapterTwo} />
        <Drawer.Screen name="Chapter 3" component={ChapterThree} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
