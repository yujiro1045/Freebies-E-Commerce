import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function order() {
  return (
    <View style={styles.container}>
      <Text>order</Text>
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
