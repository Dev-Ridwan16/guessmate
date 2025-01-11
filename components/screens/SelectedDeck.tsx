import React from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { CustomFont } from "../ui/CustomText"
import { Colors } from "@/constants/Colors"
import { CustomIcon } from "../feedbacks/CustomIcon"
import { useNavigation } from "expo-router"
import { useRoute } from "@react-navigation/native"
import { DeckInterface } from "@/interface"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/app/store"
import { startSelectedGame } from "@/app/features/deck.slice"

const SelectedDeck: React.FC = () => {
  const route = useRoute()
  const navigate = useNavigation<any>()
  const dispatch = useDispatch<AppDispatch>()
  const { deck } = route.params as { deck: DeckInterface }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button]}
        onPress={() => {
          dispatch(startSelectedGame(deck))
          navigate.navigate("StartDeck")
        }}
      >
        <CustomIcon name="clock" size={16} color={Colors.light.text} />
        <CustomFont value="Start" size={15} weight="semibold" />
      </Pressable>
      <Pressable style={[styles.button]}>
        <CustomIcon name="pen" size={16} color={Colors.light.text} />
        <CustomFont value="Edit" size={15} weight="semibold" />
      </Pressable>
      <Pressable style={[styles.button]}>
        <CustomIcon name="trash" size={16} color={Colors.light.text} />
        <CustomFont value="Delete" size={15} weight="semibold" />
      </Pressable>
      <Pressable style={[styles.button]} onPress={() => navigate.goBack()}>
        <CustomIcon name="home" size={16} color={Colors.light.text} />
        <CustomFont value="Go back home" size={15} weight="semibold" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
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

export default SelectedDeck
