import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import CustomInput from "@/components/CustomInput";

export default function index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CustomInput />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primary.pureWhite,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary.pureWhite,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
});
