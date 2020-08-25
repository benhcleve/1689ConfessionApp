import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Section1, Section2 } from "./Chapter1Sections";

export const ChapterOneBody = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chapter 1: Of The Holy Scriptures</Text>

      <Text style={styles.text}>
        {"\n"}
        {Section1.body} {"\n\n\n"}
        {Section2.body1} {"\n\n"}
        {Section2.body2} {"\n\n"}
        {Section2.body3}
      </Text>
    </View>
  );
};

const SectionOne = () => {
  <View>Hello</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  header: {
    color: "#161924",
    fontSize: 30,
    fontWeight: "500",
  },
  text: {
    color: "#161924",
    fontSize: 16,
    fontWeight: "500",
  },
});
