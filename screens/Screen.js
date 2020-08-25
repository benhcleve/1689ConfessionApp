import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }} onPress={this.props.navigation.openDrawer}>
            <FontAwesome5 name="bars" size={24} color="#161924" />
          </TouchableOpacity>
          <ScrollView>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>{this.props.body}</View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    color: "#161924",
    fontSize: 30,
    fontWeight: "500",
  },
  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "500",
  },
});
