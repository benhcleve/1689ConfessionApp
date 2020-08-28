import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

export const BibleVerse = (props) => {
  return (
    <Text style={{ color: "#bf9463", textDecorationLine: "underline" }} onPress={() => Linking.openURL(props.link)}>
      <Text style={{ color: "#AEAEB0", textDecorationLine: "line-through", fontWeight: "bold" }}> • </Text>
      {props.verse}
    </Text>
  );
};
