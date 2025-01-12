import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { useSelector } from "react-redux"
import { Accelerometer } from "expo-sensors"
import { CustomFont } from "../ui/CustomText"
import { useNavigation } from "expo-router"
import * as ScreenOrientation from "expo-screen-orientation"
import { Colors } from "@/constants/Colors"
import { RootState } from "@/app/store"
import { CustomIcon } from "../feedbacks/CustomIcon"

const StartDeck: React.FC = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 })
  const [scoreAlert, setScoreAlert] = useState<boolean | null>(null)
  const [score, setScore] = useState<number>(1)
  const [attemptedQuestions, setAttemptedQuestions] = useState<string[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null)
  const [lastTiltTime, setLastTiltTime] = useState<number>(0)
  const decks = useSelector((state: RootState) => state.deckReducer)
  const totalQuestion = decks.things.length
  const navigate = useNavigation<any>()

  const remainingQuestions = decks.things.filter(
    (question) => !attemptedQuestions.includes(question)
  )

  const handleNext = () => {
    if (remainingQuestions.length === 0) {
      navigate.navigate("Result", { score, totalQuestion })
      return
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length)
    const question = remainingQuestions[randomIndex]

    setAttemptedQuestions((prev) => [...prev, question])
    setCurrentQuestion(question)
  }

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

    const tiltThreshold = 0.5
    const debounceTime = 1000

    if (currentTime - lastTiltTime > debounceTime) {
      if (x < -tiltThreshold) {
        // Tilted down
        setScore(score + 1)
        setScoreAlert(true)
        setLastTiltTime(currentTime)
        handleNext()
      } else if (x > tiltThreshold) {
        // Tilted up
        setScoreAlert(false)
        setLastTiltTime(currentTime)
        handleNext()
      }
    }
  }, [data])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScoreAlert(null)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [scoreAlert])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#12C66C",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {scoreAlert !== null && (
        <View
          style={{
            position: "absolute",
            top: "2%",
            left: "50%",
            transform: [{ translateX: "-50%" }],
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            backgroundColor: Colors.light.background,
            borderRadius: "10%",
            width: 200,
            height: 70,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <CustomIcon
            name={scoreAlert ? "check" : "times"}
            size={30}
            color={scoreAlert ? "#12C66C" : "#d33"}
          />
          <CustomFont value={scoreAlert ? "Correct" : "Incorrect"} size={30} weight="bold" />
        </View>
      )}
      {currentQuestion ? (
        <>
          <CustomFont
            value={currentQuestion}
            size={40}
            weight="bold"
            color={Colors.light.background}
          />
        </>
      ) : (
        <CustomFont value="No questions available!" size={20} weight="bold" />
      )}
    </View>
  )
}

export default StartDeck
