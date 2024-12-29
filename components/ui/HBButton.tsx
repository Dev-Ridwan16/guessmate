import { Colors } from "@/constants/Colors"
import { HBButtonInterface } from "@/interface"
import React from "react"
import { Pressable, StyleSheet, Text } from "react-native"

export const HBButton: React.FC<HBButtonInterface> = ({
  title,
  children,
  onPress,
  disabled,
  backgroundOff = false,
}) => {
  return (
    <Pressable
      style={[
        styles.button,
        {
          opacity: disabled ? 0.5 : 1,
          backgroundColor: !backgroundOff ? Colors.light.background : "none",
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[styles.buttonText, { color: !backgroundOff ? "#fff" : Colors.light.background }]}
      >
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
  },
  buttonText: {
    fontSize: 16,
  },
})
