import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function login() {
  return (
    <View style={styles.container}>
      <Text>login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
