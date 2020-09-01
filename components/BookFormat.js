import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

export const BibleVerse = (props) => {
  return (
    <Text>
      <Text style={{ color: "#AEAEB0", fontWeight: "bold" }}> • </Text>
      <Text style={{ fontSize: 10 }}>{props.verseRef}</Text>
      <Text style={{ color: "#bf9463", textDecorationLine: "underline" }} onPress={() => Linking.openURL(props.link)}>
        {props.verse}
      </Text>
    </Text>
  );
};

export const Excerpt = (props) => {
  return (
    <Text>
      <Text> {props.body}</Text>
      <Text style={{ fontSize: 10, color: "#bf9463", fontWeight: "bold" }}>{props.verseRef}</Text>
    </Text>
  );
};
