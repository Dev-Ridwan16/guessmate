import { FormInput } from "@/components/forms/FormInput"
import { HBButton } from "@/components/ui/HBButton"
import { Colors } from "@/constants/Colors"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

export const Register: React.FC<{ onAuthChipPress?: () => void }> = ({ onAuthChipPress }) => {
  const navigation = useNavigation<any>()
  const [showPassword, setShowPassword] = useState(false)
  const [loginCredentials, setLoginCredentials] = useState<{
    name: string
    email: string
    password: string
    [key: string]: string
  }>({
    name: "",
    email: "",
    password: "",
  })
  const credentialsIcon = ["user", "envelope", "lock"]

  return (
    <View style={styles.formWrapper}>
      {Object.keys(loginCredentials).map((value, index) => (
        <View key={index}>
          <FormInput
            icon={credentialsIcon[index]}
            secureTextEntry={value === "password" && !showPassword}
            placeholder={
              value === "name" ? "Full Name" : value.charAt(0).toUpperCase() + value.slice(1)
            }
          />
          {value === "password" && (
            <React.Fragment>
              <Pressable
                style={styles.passwordToggle}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon name={!showPassword ? "eye" : "eye-slash"} size={18} color="#a1a1a1" />
              </Pressable>
            </React.Fragment>
          )}
        </View>
      ))}
      <HBButton title="Sign Up" onPress={() => navigation.navigate("VerifyEmail")} />
      <View style={styles.footer}>
        <Text>Have an account?</Text>
        <Pressable onPress={onAuthChipPress}>
          <Text style={{ color: Colors.light.tint }}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    marginTop: 30,
  },
  input: {
    borderColor: "#d7d7d7",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  passwordToggle: {
    position: "absolute",
    right: 10,
    top: 18,
  },
  forgotPasswordText: {
    color: Colors.light.background,
    textAlign: "right",
    marginBottom: 20,
  },
  footer: {
    display: "flex",
    gap: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
})
