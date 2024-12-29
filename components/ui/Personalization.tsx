import {
  hairConcernLists,
  hairGoalLists,
  hairTextureLists,
  hairTypeLists,
} from "@/constants/api.data"
import { Colors } from "@/constants/Colors"
import React from "react"
import { StyleSheet } from "react-native"
import { Text, View, Pressable, Image, ImageSourcePropType } from "react-native"

export const HairTypeComponent: React.FC<{
  selectedType: number | null
  disableUnselected: boolean
  setSelectedType: (index: number | null) => void
  setDisableUnselected: (value: boolean) => void
}> = ({ selectedType, disableUnselected, setSelectedType, setDisableUnselected }) => {
  const handleSelectHairType = (index: number) => {
    setSelectedType(index)
    setDisableUnselected(true)
  }

  return (
    <View style={styles.hairTypeContainer}>
      <Text style={{ fontSize: 18, color: "#a1a1a1" }}>You can select only one</Text>
      <View style={styles.hairTypeWrapper}>
        {hairTypeLists.map((type, index) => (
          <Pressable
            key={index}
            onPress={() => handleSelectHairType(index)}
            style={[
              styles.hairTypeCard,
              {
                borderColor: Colors.light.background,
                borderStyle: "solid",
                borderWidth: selectedType === index ? 2 : 0,
                opacity: disableUnselected && selectedType !== index ? 0.2 : 1,
              },
            ]}
          >
            <Image source={type.imageIndicator as ImageSourcePropType} />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{type.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}
export const HairTextureComponent: React.FC<{
  selectedTexture: number | null
  disableUnselected: boolean
  setSelectedTexture: (index: number | null) => void
  setDisableUnselected: (value: boolean) => void
}> = ({ selectedTexture, disableUnselected, setSelectedTexture, setDisableUnselected }) => {
  const handleSelectHairType = (index: number) => {
    setSelectedTexture(index)
    setDisableUnselected(true)
  }

  return (
    <View style={styles.hairTypeContainer}>
      <Text style={{ fontSize: 18, color: "#a1a1a1" }}>
        You can select only one 1 {disableUnselected}
      </Text>
      <View style={styles.hairTypeWrapper}>
        {hairTextureLists.map((type, index) => (
          <Pressable
            key={index}
            onPress={() => handleSelectHairType(index)}
            style={[
              styles.hairTypeCard,
              {
                borderColor: Colors.light.background,
                borderStyle: "solid",
                borderWidth: selectedTexture === index ? 2 : 0,
                opacity: disableUnselected && selectedTexture !== index ? 0.2 : 1,
              },
            ]}
          >
            <Image source={type.imageIndicator as ImageSourcePropType} />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{type.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export const HairConcernComponent: React.FC<{
  selectedConcern: number | null
  disableUnselected: boolean
  setSelectedConcern: (index: number | null) => void
  setDisableUnselected: (value: boolean) => void
}> = ({ selectedConcern, disableUnselected, setSelectedConcern, setDisableUnselected }) => {
  const handleSelectHairConcern = (index: number) => {
    setSelectedConcern(index)
    setDisableUnselected(true)
  }

  return (
    <View style={styles.hairTypeContainer}>
      <Text style={{ fontSize: 18, color: "#a1a1a1" }}>
        You can select only one 1 {disableUnselected}
      </Text>
      <View style={styles.hairTypeWrapper}>
        {hairConcernLists.map((type, index) => (
          <Pressable
            key={index}
            onPress={() => handleSelectHairConcern(index)}
            style={[
              styles.hairTypeCard,
              {
                borderColor: Colors.light.background,
                borderStyle: "solid",
                borderWidth: selectedConcern === index ? 2 : 0,
                opacity: disableUnselected && selectedConcern !== index ? 0.2 : 1,
              },
            ]}
          >
            <Image source={type.imageIndicator as ImageSourcePropType} />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{type.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export const HairGoalComponent: React.FC<{
  selectedGoal: number[]
  setSelectedGoal: (index: number[]) => void
}> = ({ selectedGoal, setSelectedGoal }) => {
  const toggleSelection = (index: number) => {
    const currentGoals = selectedGoal || []
    if (currentGoals.includes(index)) {
      setSelectedGoal(currentGoals.filter((i) => i !== index))
    } else setSelectedGoal([...currentGoals, index])
  }
  return (
    <View style={styles.hairTypeContainer}>
      <Text style={{ fontSize: 18, color: "#a1a1a1" }}>Select all that applies</Text>

      <View style={styles.hairTypeWrapper}>
        {hairGoalLists.map((goal, index) => (
          <Pressable
            key={index}
            onPress={() => toggleSelection(index)}
            style={[
              styles.goalCard,
              {
                borderColor: selectedGoal?.includes(index) ? Colors.light.background : "#d9d9d9",
                borderWidth: selectedGoal?.includes(index) ? 2 : 1,
              },
            ]}
          >
            <View style={styles.goalCardTextContent}>
              <Image
                source={goal.imageIndicator as ImageSourcePropType}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <View style={{ flexDirection: "column", gap: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: Colors.light.darkColor }}>
                {goal.name}
              </Text>
              <Text style={{ color: "#a1a1a1" }}>{goal.description}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    width: "100%",
  },
  header: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  hairTypeContainer: {
    marginVertical: 25,
    flexDirection: "column",
    gap: 25,
  },
  hairTypeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 15,
  },
  hairTypeCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    borderRadius: 10,
    paddingVertical: 5,
    width: "30%",
  },
  goalCard: {
    width: "100%",
    height: 70,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
  goalCardTextContent: {
    backgroundColor: "#FFF5EE",
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
})
