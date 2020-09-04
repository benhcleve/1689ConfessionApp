import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-navigation";
import OuterDrawerItem from "./OuterDrawerItem";
import { Home, ChapterOne, ChapterTwo, ChapterThree } from "../screens";

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" component={Home} drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="Chapter 1" component={ChapterOne} />
      <Drawer.Screen name="Chapter 2" component={ChapterTwo} />
    </Drawer.Navigator>
  );
};

function Sidebar(props) {
  const [drawerState, setDrawerState] = useState("allChapters");

  if (drawerState == "allChapters") {
    return (
      <DrawerContentScrollView {...props}>
        <Text style={styles.header}>Chapters</Text>
        <OuterDrawerItem
          label="Chapter 1"
          component={ChapterOne}
          onPress={() => {
            setDrawerState("chapterOne");
            props.navigation.navigate("Chapter 1");
          }}
        />
        <OuterDrawerItem
          label="Chapter 2"
          component={ChapterTwo}
          onPress={() => {
            setDrawerState("chapterTwo");
            props.navigation.navigate("Chapter 2");
          }}
        />
      </DrawerContentScrollView>
    );
  } else if (drawerState == "chapterOne") {
    return (
      <DrawerContentScrollView {...props}>
        <Text style={styles.header}>Chapter 1</Text>
        <OuterDrawerItem label="Chapters" onPress={() => setDrawerState("allChapters")} />
        <DrawerItem label="Section 1" onPress={() => setDrawerState("allChapters")} />
      </DrawerContentScrollView>
    );
  } else {
    return (
      <DrawerContentScrollView {...props}>
        <Text style={styles.header}>Loading...</Text>
        <OuterDrawerItem label="Chapters" onPress={() => setDrawerState("allChapters")} />
      </DrawerContentScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  header: {
    color: "white",
    backgroundColor: "lightgray",
    width: "100%",
    fontSize: 30,
    fontWeight: "500",
    paddingHorizontal: 25,
  },
  drawerButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    width: "100%",
    paddingHorizontal: 25,
  },
});

export default AppDrawer;
