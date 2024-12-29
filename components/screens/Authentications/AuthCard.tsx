import { useNavigation } from "@react-navigation/native"
import React from "react";
import { Button, Image, ImageSourcePropType, Pressable, Text } from "react-native"
import { StyleSheet, View } from "react-native"

const AuthChip: React.FC<{ icon: string; text: string; routePath?: () => void }> = ({
  icon,
  text,
  routePath,
}) => {
  return (
    <Pressable
      onPress={routePath}
      style={style.chipContainer}
    >
      <View style={style.chipFlex}>
        <Image source={icon as ImageSourcePropType} />
        <Text>{text}</Text>
      </View>
    </Pressable>
  )
}
export const AuthCard: React.FC<{onAuthChipPress: () => void}> = ({onAuthChipPress}) => {
  const authChipOptions: { icon?: string; text: string; onPress?: () => void }[] = [
    {
      icon: require("@/assets/images/GoogleIconColored.png"),
      text: "Sign In With Google",
    },
    {
      icon: require("@/assets/images/AppleIconColored.png"),
      text: "Sign In With Apple",
    },
    {
      icon: require("@/assets/images/EmailIcon.png"),
      text: "Sign In With Email",
      onPress: onAuthChipPress,
    },
  ]
  return (
    <View style={style.authSection}>
      {authChipOptions.map((authChip, index) => (
        <AuthChip
          key={index}
          text={authChip.text}
          icon={authChip.icon!}
          routePath={authChip.onPress}
        />
      ))}

      <Text style={{ textAlign: "center" }}>OR</Text>

      <AuthChip text="Sign In With Phone Number" icon="@/assets/images/AppleIconColored.png" />
    </View>
  )
}

const style = StyleSheet.create({
  authSection: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    margin: 30,
  },
  chipContainer: {
    width: 310,
    height: 50,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 10,
  },
  chipFlex: {
    width: 200,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 70,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
})
