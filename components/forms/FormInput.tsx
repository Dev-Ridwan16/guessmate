import { Colors } from "@/constants/Colors"
import React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
export const FormInput: React.FC<{
  icon?: string
  secureTextEntry: boolean
  placeholder?: string
}> = ({ icon, secureTextEntry, placeholder }) => {
  const paddingLeft = icon ? 45 : 20
  const newInputStyle = {
    ...styles.input,
    paddingLeft,
  }
  return (
    <View style={{ position: "relative" }}>
      {icon && <Icon name={icon} style={styles.icon} />}
      <TextInput
        style={newInputStyle}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={"#c9c9c9"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#d7d7d7",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingRight: 20,
    width: "100%",
    height: 50,
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 15,
    color: "#d7d7d7",
    fontSize: 20,
    zIndex: 1,
  },
})
