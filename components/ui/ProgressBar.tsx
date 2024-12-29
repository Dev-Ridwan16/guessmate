import { Colors } from "@/constants/Colors"
import React, { useEffect, useRef } from "react"
import { Animated, StyleSheet, Text, View } from "react-native"

export const ProgressBar: React.FC<{
  progress: number
  steps?: { start: number; end: number }
}> = ({ progress, steps }) => {
  const animatedWidth = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }, [progress])

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progress,
            {
              width: animatedWidth.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
      <Text style={{ fontSize: 18, color: "#a1a1a1" }}>
        {steps?.start! > steps?.end! ? "Completed" : `Step ${steps?.start} of ${steps?.end}`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  progressContainer: {
    width: "100%",
    height: 17,
    backgroundColor: "#FBD8C0",
    borderRadius: 100,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  progress: {
    backgroundColor: Colors.light.background,
    height: 10,
    borderRadius: 100,
  },
})
