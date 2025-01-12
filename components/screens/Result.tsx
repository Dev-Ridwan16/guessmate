import React, { useEffect } from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { CustomFont } from "../ui/CustomText"
import * as ScreenOrientation from "expo-screen-orientation"
import { CustomIcon } from "../feedbacks/CustomIcon"
import { useNavigation } from "expo-router"
import { Colors } from "@/constants/Colors"
import { useRoute } from "@react-navigation/native"

const Result: React.FC = () => {
  const route = useRoute()
  const { score, totalQuestion } = route.params as { score: number; totalQuestion: number }
  const navigate = useNavigation<any>()
  useEffect(() => {
    // Lock orientation to landscape when the component mounts
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    }
    lockOrientation()

    return () => {
      ScreenOrientation.unlockAsync()
    }
  }, [])
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10, gap: 40 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CustomFont value="Your Score" size={40} weight="medium" />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CustomFont
          value={`You Scored ${score} out of ${totalQuestion}`}
          size={30}
          weight="bold"
          color="#12C66C"
        />
      </View>
      <Pressable style={[styles.button]} onPress={() => navigate.navigate("HomePage")}>
        <CustomIcon name="home" size={16} color={Colors.light.text} />
        <CustomFont value="Go back home" size={15} weight="semibold" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 100,
    color: Colors.light.text,
    backgroundColor: Colors.light.background,
  },
})

export default Result
