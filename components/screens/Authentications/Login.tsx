import { FormInput } from "@/components/forms/FormInput"
import { HBButton } from "@/components/ui/HBButton"
import { Colors } from "@/constants/Colors"
import React, { useState } from "react"
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const Login: React.FC<{ onAuthChipPress?: () => void }> = ({ onAuthChipPress }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [loginCredentials, setLoginCredentials] = useState<{
    email: string
    password: string
    [key: string]: string
  }>({
    email: "",
    password: "",
  })
  const credentialsIcon = ["envelope", "lock"]

  return (
    <View style={styles.formWrapper}>
      {Object.keys(loginCredentials).map((value, index) => (
        <View key={index}>
          <FormInput
            icon={credentialsIcon[index]}
            secureTextEntry={value === "password" && !showPassword}
            placeholder={value.charAt(0).toUpperCase() + value.slice(1)}
          />
          {value === "password" && (
            <React.Fragment>
              <Pressable
                style={styles.passwordToggle}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon name={!showPassword ? "eye" : "eye-slash"} size={18} color="#a1a1a1" />
              </Pressable>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </React.Fragment>
          )}
        </View>
      ))}
      <HBButton
        title="Login"
        onPress={() => {
          {
          }
        }}
      />
      <View style={styles.footer}>
        <Text>New User?</Text>
        <Pressable onPress={onAuthChipPress}>
          <Text style={{ color: Colors.light.tint }}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  formWrapper: {
    width: '100%',
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
