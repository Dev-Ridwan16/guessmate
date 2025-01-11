import React, { useEffect, useState } from "react"
import { RootState } from "@/app/store"
import { View } from "react-native"
import { useSelector } from "react-redux"
import { Accelerometer } from "expo-sensors"
import { CustomFont } from "../ui/CustomText"
import { useNavigation } from "expo-router"
import * as ScreenOrientation from "expo-screen-orientation"
import { Colors } from "@/constants/Colors"

const StartDeck: React.FC = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 })
  const [attemptedQuestions, setAttemptedQuestions] = useState<string[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null)
  const [lastTiltTime, setLastTiltTime] = useState<number>(0) // Debounce time
  const decks = useSelector((state: RootState) => state.deckReducer)
  const navigate = useNavigation<any>()

  const remainingQuestions = decks.things.filter(
    (question) => !attemptedQuestions.includes(question)
  )

  const handleNext = () => {
    if (remainingQuestions.length === 0) {
      navigate.navigate("Result")
      return
    }

    let question: string | undefined = undefined
    while (!question && remainingQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length)
      question = remainingQuestions[randomIndex]
    }

    if (question) {
      setAttemptedQuestions((prev) => [...prev, question])
      setCurrentQuestion(question)
    }
  }

  // Set the initial question when the component mounts
  useEffect(() => {
    handleNext()
  }, [])

  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    }
    lockOrientation()

    return () => {
      ScreenOrientation.unlockAsync()
    }
  }, [])

  useEffect(() => {
    const subscription = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData)
    })

    Accelerometer.setUpdateInterval(200)

    return () => subscription.remove()
  }, [])

  useEffect(() => {
    const { x } = data
    const currentTime = Date.now()

    // Use a threshold to filter small variations
    const tiltThreshold = 0.8
    if (
      (x > tiltThreshold || x < -tiltThreshold) &&
      currentTime - lastTiltTime > 500 // Debounce: 500ms
    ) {
      setLastTiltTime(currentTime)
      handleNext()
    }
  }, [data])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#12C66C",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {currentQuestion ? (
        <CustomFont
          value={currentQuestion}
          size={40}
          weight="bold"
          color={Colors.light.background}
        />
      ) : (
        <CustomFont value="No questions available!" size={20} weight="bold" />
      )}
    </View>
  )
}

export default StartDeck
