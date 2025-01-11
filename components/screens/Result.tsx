import React, { useEffect } from "react"
import { View } from "react-native"
import { CustomFont } from "../ui/CustomText"
import * as ScreenOrientation from "expo-screen-orientation"

const Result: React.FC = () => {
  useEffect(() => {
    // Lock orientation to landscape when the component mounts
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }
    lockOrientation()

    // handleNext()

    // Unlock the orientation to default when the component unmounts
    return () => {
      ScreenOrientation.unlockAsync()
    }
  }, [])
  return (
    <View >
      <CustomFont value="Your Scour" size={40} weight="bold" />
    </View>
  )
}

export default Result
