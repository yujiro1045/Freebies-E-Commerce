import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  size?: "large" | "medium" | "half" | "small" | "mini";
  fontSize?: number;
  borderRadius?: number;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  iconSpacing?: number;
}

const sizeStyles: Record<string, ViewStyle> = {
  large: { width: 325, height: 50 },
  medium: { width: 275, height: 50 },
  half: { width: 153, height: 50 },
  small: { width: 130, height: 50 },
  mini: { width: 100, height: 30 },
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = Colors.primary.blueOcean,
  textColor = Colors.primary.pureWhite,
  size = "medium",
  fontSize = 16,
  borderRadius = 8,
  icon,
  iconPosition = "start",
  iconSpacing = 8,
}) => {
  const sizeStyle = sizeStyles[size] || sizeStyles["medium"];

  return (
    <TouchableOpacity
      style={[styles.button, sizeStyle, { backgroundColor, borderRadius }]}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        {icon && iconPosition === "start" && (
          <View style={styles.iconContainer}>{icon}</View>
        )}
        <Text style={[styles.buttonText, { color: textColor, fontSize }]}>
          {title}
        </Text>
        {icon && iconPosition === "end" && (
          <View style={[styles.iconContainer, { marginLeft: iconSpacing }]}>
            {icon}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default CustomButton;
