import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Section1, Section2 } from "./Chapter1Sections";

export const BibleVerse = (props) => {
  return (
    <Text style={{ color: "#bf9463", textDecorationLine: "underline" }} onPress={() => Linking.openURL(props.link)}>
      <Text style={{ color: "#AEAEB0", textDecorationLine: "none", fontWeight: "bold" }}>•</Text>
      {props.verse}
    </Text>
  );
};
