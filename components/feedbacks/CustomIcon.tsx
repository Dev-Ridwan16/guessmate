import React from "react"
import Icon from "react-native-vector-icons/FontAwesome5"

type FontAwesomeIconName =
  | "bar"
  | "plus"
  | "clock"
  | "pen"
  | "trash"
  | "home"
  | "angle-left"
  | "save"

export const CustomIcon: React.FC<{ name: FontAwesomeIconName; size: number; color: string }> = ({
  name,
  size = 24,
  color,
}) => {
  return <Icon name={name} size={size} color={color} />
}
