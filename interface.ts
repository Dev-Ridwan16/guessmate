import React from "react"

export interface HBButtonInterface {
  title: string
  children?: never | React.ReactNode
  onPress: () => void
  disabled?: boolean
  backgroundOff?: boolean
}
