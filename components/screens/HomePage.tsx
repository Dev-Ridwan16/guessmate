import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { Colors } from "@/constants/Colors"
import { CustomFont } from "../ui/CustomText"
import { Wrapper } from "../ui/Wrapper"
import { CustomIcon } from "../feedbacks/CustomIcon"
import { useNavigation } from "expo-router"

const HomePage: React.FC = () => {
  const navigate = useNavigation<any>()

  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10, gap: 40 }}>
      <View style={styles.headerWrapper}>
        <CustomFont value="Guessmate" size={30} weight="bold" color={Colors.light.text} />
        <Icon name="bars" size={20} color={Colors.light.text} />
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        <Pressable style={styles.cardWrapper} onPress={() => navigate.navigate("SelectedDeck")}>
          <CustomFont value="A" size={30} weight="semibold" />
          <View style={{ justifyContent: "center", alignItems: "center", gap: 5 }}>
            <CustomFont value="Animal" size={16} weight="semibold" />
            <CustomFont value="Guess what animal is it" size={12} weight="semibold" />
          </View>
        </Pressable>
        <Pressable style={styles.cardWrapper} onPress={() => navigate.navigate("NewDeck")}>
          <CustomIcon name="plus" size={30} color={Colors.light.text} />
          <CustomFont value="Create new deck" size={16} weight="semibold" />
        </Pressable>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardWrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    width: 165,
    height: 150,
    borderColor: Colors.light.border,
    borderWidth: 2,
    borderRadius: 12,
  },
})

export default HomePage
