import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import SearchIcon from "@/assets/icons/SearchIcon.svg";

const CustomInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search Product Name"
        placeholderTextColor="#C4C5C4"
      />
      <SearchIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 325,
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: Colors.secondary.darkGrey,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  icon: {
    marginLeft: 10,
  },
});

export default CustomInput;
