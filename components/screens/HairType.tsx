import React, { useState } from "react"
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native"
import {
  HairConcernComponent,
  HairGoalComponent,
  HairTextureComponent,
  HairTypeComponent,
} from "../ui/Personalization"
import { Wrapper } from "../ui/Wrapper"
import { GreatVibeText } from "../ui/CustomText"
import { ProgressBar } from "../ui/ProgressBar"
import { Colors } from "@/constants/Colors"
import { SuccessPage } from "./Authentications/SuccessPage"

const { width } = Dimensions.get("window")

export const HairType = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedGoal, setSelectedGoal] = useState<number[]>()
  const [selectedType, setSelectedType] = useState<number | null>(null)
  const [selectedTexture, setSelectedTexture] = useState<number | null>(null)
  const [selectedConcern, setSelectedConcern] = useState<number | null>(null)
  const [disableUnselected, setDisableUnselected] = useState<boolean[]>(Array(4).fill(false))
  const questions = [
    "What is your type of hair?",
    "What is your  hair texture?",
    "What are your current concerns?",
    "Select your Goal",
    "Congratulations! You've completed your hair survey!",
  ]
  const slides = [
    {
      key: "hairType",
      component: (
        <HairTypeComponent
          selectedType={selectedType}
          disableUnselected={disableUnselected[0]}
          setDisableUnselected={(value: boolean) => {
            setDisableUnselected((prev) => {
              const updated = [...prev]
              updated[0] = value
              return updated
            })
          }}
          setSelectedType={(index: number | null) => setSelectedType(index)}
        />
      ),
    },
    {
      key: "hairTexture",
      component: (
        <HairTextureComponent
          selectedTexture={selectedTexture}
          disableUnselected={disableUnselected[1]}
          setDisableUnselected={(value: boolean) => {
            setDisableUnselected((prev) => {
              const updated = [...prev]
              updated[1] = value
              return updated
            })
          }}
          setSelectedTexture={(index: number | null) => setSelectedTexture(index)}
        />
      ),
    },
    {
      key: "hairConcern",
      component: (
        <HairConcernComponent
          selectedConcern={selectedConcern}
          disableUnselected={disableUnselected[2]}
          setDisableUnselected={(value: boolean) => {
            setDisableUnselected((prev) => {
              const updated = [...prev]
              updated[2] = value
              return updated
            })
          }}
          setSelectedConcern={(index: number | null) => setSelectedConcern(index)}
        />
      ),
    },
    {
      key: "hairGoal",
      component: (
        <HairGoalComponent selectedGoal={selectedGoal!} setSelectedGoal={setSelectedGoal} />
      ),
    },
    {
      key: "completion",
      component: (
        <SuccessPage showBtn={false} />
      ),
    },
  ]

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    } else {
      setCurrentIndex(4)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  const isCurrentSlideValid = (index: number) => {
    switch (index) {
      case 0: // Hair Type
        return selectedType !== null
      case 1: // Hair Texture
        return selectedTexture !== null
      case 2: // Hair Concern
        return selectedConcern !== null
      case 3: // Hair Goal
        return selectedGoal && selectedGoal.length > 0
      default:
        return true // No validation needed for the completion step
    }
  }

  return (
    <Wrapper>
      <ScrollView>
        <View style={styles.header}>
          <GreatVibeText value="You're In Bestie" size={45} align="center" />
          <Text style={{ textAlign: "center", fontSize: 20, color: "#a1a1a1" }}>
            Let's set up your account
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "600",
              color: "#2b2b2b",
              marginVertical: 20,
            }}
          >
            {questions[currentIndex]}
          </Text>
          <ProgressBar
            progress={(currentIndex / slides.length) * 25 * slides.length}
            steps={{ start: currentIndex + 1, end: slides.length - 1 }}
          />
        </View>

        {/* Display Current Slide */}
        <View style={styles.carousel}>
          {slides.map((slide, index) => (
            <View
              key={slide.key}
              style={[styles.slideWrapper, { display: index === currentIndex ? "flex" : "none" }]}
            >
              {slide.component}
            </View>
          ))}
        </View>

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, currentIndex === 0 && styles.disabledButton, styles.prevButton]}
            onPress={handlePrev}
            disabled={currentIndex === 0}
          >
            <Text style={{ color: Colors.light.background }}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              currentIndex < slides.length - 1 &&
                !isCurrentSlideValid(currentIndex) &&
                styles.disabledButton,
              { backgroundColor: Colors.light.background },
            ]}
            onPress={handleNext}
            disabled={currentIndex < slides.length - 1 && !isCurrentSlideValid(currentIndex)}
          >
            <Text style={styles.buttonText}>
              {currentIndex < slides.length - 1 ? "Next" : "Finish"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
  stepTitle: {
    fontSize: 22,
    marginTop: 20,
  },
  carousel: {
    justifyContent: "center",
    alignItems: "center",
  },
  slideWrapper: {
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  slideText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 60,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  prevButton: {
    borderWidth: 2,
    borderColor: Colors.light.background,
    borderRadius: 5,
  },
  disabledButton: {
    // backgroundColor: "#ccc",
    opacity: 0.3,
    color: Colors.light.background,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
})
