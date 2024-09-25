import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "@/components/buttons/CustomButtons";
import { Colors } from "@/constants/Colors";
import StarIcon from "@/assets/icons/StarIcon.svg";

export default function wishlist() {
  return (
    <View style={styles.container}>
      <Text>wishlist</Text>
      <View style={styles.buttonsContainer}>
        <CustomButton
          title="Large "
          onPress={() => alert("large")}
          backgroundColor={Colors.primary.navyBlack}
          size="large"
          icon={<StarIcon />}
          iconPosition="end"
        />
        <CustomButton
          title="medium "
          onPress={() => alert("medium")}
          backgroundColor={Colors.primary.orangeFresh}
          size="medium"
        />
        <CustomButton
          title="half "
          onPress={() => alert("half")}
          backgroundColor={Colors.primary.orangeFresh}
          size="half"
        />
        <CustomButton
          title="small "
          onPress={() => alert("small")}
          backgroundColor={Colors.primary.blueOcean}
          size="small"
        />
        <CustomButton
          title="mini "
          onPress={() => alert("mini")}
          backgroundColor={Colors.primary.blueOcean}
          size="mini"
        />
      </View>
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
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
