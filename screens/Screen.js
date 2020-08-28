import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

export default class Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ backgroundColor: "#192436" }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "stetch", backgroundColor: "#192436" }}>
            <Text style={{ alignSelf: "center", backgroundColor: "#192436", color: "#ffffff", fontSize: 20 }}>1689 London Baptist Confession</Text>
            <TouchableOpacity style={{ margin: 16 }}>
              <FontAwesome5 style={{ alignSelf: "flex-end" }} name="bars" size={36} color="#AEAEB0" onPress={this.props.navigation.openDrawer} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={{ width: "100%", flex: 1 }}>{this.props.body}</View>
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
