import React from "react"
import { Pressable, TextInput, View } from "react-native"
import { CustomFont } from "../ui/CustomText"
import { styles } from "./HomePage"
import { CustomIcon } from "../feedbacks/CustomIcon"
import { Colors } from "@/constants/Colors"
import { FormInput } from "../forms/FormInput"

const NewDeck: React.FC = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10, gap: 40, position: "relative" }}>
      <View style={styles.headerWrapper}>
        <CustomFont value="Add new deck" size={30} weight="bold" />
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <CustomIcon name="angle-left" size={20} color={Colors.light.text} />
          <CustomFont value="Back" size={18} />
        </View>
      </View>

      <View style={{ flexDirection: "column", gap: 35 }}>
        <View style={{ flexDirection: "column", gap: 15 }}>
          <FormInput placeholder="Title" secureTextEntry={false} />
          <FormInput placeholder="Description" secureTextEntry={false} />
        </View>
        <View style={{ flexDirection: "column", gap: 15 }}>
          <CustomFont value="You can only add up to 10 things" size={16} weight="regular" />
          <FormInput placeholder="Name of thing you want to add" secureTextEntry={false} />
        </View>
      </View>

      <Pressable
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
  )
}

export default NewDeck
