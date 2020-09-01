import React from "react";
import { View, Text, StyleSheet, SectionList, SafeAreaView } from "react-native";
import { DATA } from "./Chapter1Sections";
import { HeaderTitle } from "@react-navigation/stack";

const Item = ({ title }) => (
  <Text style={styles.text}>
    <Text>
      {"\n"}
      {title}
      {"\n"}
    </Text>
  </Text>
);

export const ChapterOneBody = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Chapter 1: Of The Holy Scriptures</Text>
      <SectionList
        width="100%"
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}> Section {title}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  header: {
    color: "white",
    backgroundColor: "gray",
    width: "100%",
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
    width: "100%",
    paddingHorizontal: 25,
    lineHeight: 30,
  },
});
