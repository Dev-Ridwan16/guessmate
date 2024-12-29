import React from "react"
import { useFonts } from "expo-font"
import { StyleSheet, Text } from "react-native"

/* ------------------------------- COMFORTER-REGULAR FONT ------------------------------- */

export const ComforterFont: React.FC<{
  value: string
  size?: number
  color?: string
  align?: "auto" | "center" | "left" | "right"
}> = ({ value, size = 14, align, color }) => {
  const [fontLoaded] = useFonts({
    "Comforter-Regular": require("@/assets/fonts/Comforter-Regular.ttf"),
  })
  const styling = {
    ...comforterStyles.comforterFont,
    fontSize: size,
    textAlign: align,
    color,
  }

  if (!fontLoaded) return null

  return <Text style={styling}>{value}</Text>
}

const comforterStyles = StyleSheet.create({
  comforterFont: {
    fontFamily: "Comforter-Regular",
  },
})

/* ------------------------------- SPACE-MONO-REGULAR FONT ------------------------------- */
export const SpaceMonoText: React.FC<{
  value: string
  size?: number
  color?: string
  align?: "auto" | "center" | "left" | "right"
}> = ({ value, size = 14, color, align }) => {
  const [fontLoaded] = useFonts({
    "SpaceMono-Regular": require("@/assets/fonts/SpaceMono-Regular.ttf"),
  })
  const styling = {
    ...spaceMonoStyle.spaceMonoFont,
    fontSize: size,
    textAline: align,
    color,
  }

  if (!fontLoaded) return null

  return <Text style={styling}>{value}</Text>
}

const spaceMonoStyle = StyleSheet.create({
  spaceMonoFont: {
    fontFamily: "SpaceMono-Regular",
  },
})

/* ------------------------------- GREAT-VIBES FONT ------------------------------- */

export const GreatVibeText: React.FC<{ value: string; size?: number; color?: string, align?: "auto" | "center" | "left" | "right" }> = ({
  value,
  size = 14,
  color,
  align
}) => {
  const [fontLoaded] = useFonts({
    "GreatVibes-Regular": require("@/assets/fonts/GreatVibes-Regular.ttf"),
  })
  const styling = {
    ...greatVibeStyle.greatVibesFont,
    fontSize: size,
    color,
    textAlign: align
  }

  if (!fontLoaded) return null

  return <Text style={styling}>{value}</Text>
}

const greatVibeStyle = StyleSheet.create({
  greatVibesFont: {
    fontFamily: "GreatVibes-Regular",
  },
})
