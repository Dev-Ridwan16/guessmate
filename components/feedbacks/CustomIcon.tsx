import React from "react"
import { ViewStyle } from "react-native"
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
  | "plus"
  | "times"

export const CustomIcon: React.FC<{
  name: FontAwesomeIconName
  size: number
  color: string
  style?: ViewStyle
}> = ({ name, size = 24, color, style }) => {
  // @ts-ignore
  return <Icon name={name} size={size} color={color} style={style} />
}
