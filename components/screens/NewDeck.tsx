import React, { useState } from "react"
import {
  Keyboard,
  Pressable,
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { CustomFont } from "../ui/CustomText"
import { styles } from "./HomePage"
import { CustomIcon } from "../feedbacks/CustomIcon"
import { Colors } from "@/constants/Colors"
import { FormInput } from "../forms/FormInput"
import { DeckInterface } from "@/interface"
import { saveData } from "@/constants/api.data"

const NewDeck: React.FC = () => {
  const [deck, setDeck] = useState<DeckInterface | null>(null)
  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [name, setName] = useState<string>()
  const [nameOfThings, setNameOfThings] = useState<string[]>([])

  const handleAddThing = () => {
    if (!name) return

    if (name!.trim() && nameOfThings.length < 10) {
      setNameOfThings((prev) => [...prev, name!.trim()])
      setName("")
    }
  }

  const handleRemoveThing = (itemToRemove: string) => {
    setNameOfThings((prev) => prev.filter((item) => item !== itemToRemove))
  }

  const handleSaveDeck = async () => {
    if (!title || !description || !nameOfThings.length) {
      alert("Please fill all the required fields")
      return
    }

    const newDeck: DeckInterface = {
      title,
      description,
      things: nameOfThings,
    }
    await saveData("decks", newDeck)
    alert("Deck saved successfully!")

    setName("")
    setTitle("")
    setDescription("")
    setNameOfThings([])
    setDeck(null)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
          gap: 40,
          position: "relative",
        }}
      >
        <View style={styles.headerWrapper}>
          <CustomFont value="Add new deck" size={30} weight="bold" />
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <CustomIcon name="angle-left" size={20} color={Colors.light.text} />
            <CustomFont value="Back" size={18} />
          </View>
        </View>

        <View style={{ flexDirection: "column", gap: 35 }}>
          <View style={{ flexDirection: "column", gap: 15 }}>
            <FormInput
              value={title!}
              onchange={(event: NativeSyntheticEvent<TextInputChangeEventData>) =>
                setTitle(event.nativeEvent.text)
              }
              placeholder="Title"
              secureTextEntry={false}
            />
            <FormInput
              value={description!}
              onchange={(event: NativeSyntheticEvent<TextInputChangeEventData>) =>
                setDescription(event.nativeEvent.text)
              }
              placeholder="Description"
              secureTextEntry={false}
            />
          </View>
          <View style={{ flexDirection: "column", gap: 15 }}>
            <CustomFont value="You can only add up to 10 things" size={16} weight="regular" />
            <View style={{ position: "relative" }}>
              <FormInput
                value={name!}
                onchange={(event: NativeSyntheticEvent<TextInputChangeEventData>) =>
                  setName(event.nativeEvent.text)
                }
                placeholder="Name of thing you want to add"
                secureTextEntry={false}
              />
              <Pressable
                onPress={handleAddThing}
                style={{
                  position: "absolute",
                  top: "40%",
                  right: "5%",
                  transform: [{ translateY: "-40%" }],
                }}
              >
                <CustomIcon name="plus" size={15} color={"#12C66C"} />
              </Pressable>
            </View>
          </View>
          <View style={{ gap: 20 }}>
            {nameOfThings.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CustomFont value={item} size={18} weight="medium" />
                <Pressable onPress={() => handleRemoveThing(item)}>
                  <CustomIcon name="times" size={25} color={"#d33"} />
                </Pressable>
              </View>
            ))}
          </View>
        </View>

        <Pressable
          onPress={handleSaveDeck}
          style={{
            backgroundColor: "#12C66C",
            width: "100%",
            height: 50,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            bottom: 15,
            position: "absolute",
            left: "45%",
            transform: [{ translateX: "-40%" }],
          }}
        >
          <View
            style={{ flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center" }}
          >
            <CustomIcon name="save" size={16} color={Colors.light.background} />
            <CustomFont value="Save" size={16} color={Colors.light.background} />
          </View>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewDeck
