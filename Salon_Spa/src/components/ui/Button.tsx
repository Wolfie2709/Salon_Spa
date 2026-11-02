import { buttonStyles as styles } from "../../../theme";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "text";
  size?: "large" | "small";
  disabled?: boolean;
  pressed?: boolean;
};

const variantStyles = {
  primary: {
    button: styles.primary,
    pressed: styles.pressedPrimary,
    text: styles.primaryText,
  },
  secondary: {
    button: styles.secondary,
    pressed: styles.pressedSecondary,
    text: styles.secondaryText,
  },
  text: {
    button: styles.textButton,
    pressed: styles.pressedText,
    text: styles.textVariant,
  },
};

export default function Button({
  title,
  onPress,
  variant = "primary",
  size = "large",
  disabled = false,
  pressed = false,
}: ButtonProps) {
  const v = variantStyles[variant];

  return (
    <TouchableOpacity
      style={[
        styles.base,
        v.button,
        size === "small" ? styles.small : styles.large,
        disabled && styles.disabled,
        pressed && v.pressed,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, v.text]}>{title}</Text>
    </TouchableOpacity>
  );
}