import React from "react";
import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import BellIcon from "@/assets/icons/BellIcon.svg";
import ShopingCarIcon from "@/assets/icons/ShopingCarIcon.svg";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary.pureWhite,
        },
        title: "Mega Mall",
        headerTintColor: Colors.primary.blueOcean,
        headerTitleAlign: "center",
        headerRight: () => (
          <View style={styles.iconsContainer}>
            <Link href={"/(tabs)/wishlist"}>
              <BellIcon width={25} height={25} />
            </Link>
            <Link href={"/(tabs)/order"}>
              <ShopingCarIcon width={25} height={25} />
            </Link>
          </View>
        ),
      }}
    />
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    gap: 18,
    right: 10,
  },
});

export default _layout;
