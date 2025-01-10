import React from "react"
import { useFonts } from "expo-font"
import { StyleSheet, Text } from "react-native"
import { Colors } from "@/constants/Colors"

/* ------------------------------- COMFORTER-REGULAR FONT ------------------------------- */

export const CustomFont: React.FC<{
  value: string
  size?: number
  color?: string
  weight?: "bold" | "medium" | "regular" | "semibold"
  align?: "auto" | "center" | "left" | "right"
}> = ({ value, size = 14, align, color = Colors.light.text, weight = "regular" }) => {
  const [fontLoaded] = useFonts({
    "Oxanium-Regular": require("@/assets/fonts/Oxanium-Regular.ttf"),
    "Oxanium-Medium": require("@/assets/fonts/Oxanium-Medium.ttf"),
    "Oxanium-Bold": require("@/assets/fonts/Oxanium-Bold.ttf"),
    "Oxanium-SemiBold": require("@/assets/fonts/Oxanium-SemiBold.ttf"),
  })
  const styling = {
    fontFamily:
      weight === "regular"
        ? "Oxanium-Regular"
        : weight === "medium"
        ? "Oxanium-Medium"
        : weight === "bold"
        ? "Oxanium-Bold"
        : weight === "semibold" ? "Oxanium-Semibold" : "Oxanium-Regular",
    fontSize: size,
    textAlign: align,
    color,
  }

  if (!fontLoaded) return null

  return <Text style={styling}>{value}</Text>
}
