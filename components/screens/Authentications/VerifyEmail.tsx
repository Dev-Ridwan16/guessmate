import { HBButton } from "@/components/ui/HBButton"
import { useNavigation } from "expo-router"
import React, { useState, useRef, useCallback, useEffect } from "react"
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

export const VerifyEmail = () => {
  const navigation = useNavigation<any>()
  const [countdown, setCountdown] = useState<number>(1)
  const [token, setToken] = useState<string[]>(["", "", "", ""])
  const inputs = useRef<(TextInput | null)[]>([])

  const handleInputChange = (text: string, index: number) => {
    if (text.length <= 1) {
      const newToken = [...token]
      newToken[index] = text
      setToken(newToken)

      if (text === "") inputs.current[index]?.focus()
      else {
        const nextInput = index + 1
        if (nextInput < token.length) {
          inputs.current[nextInput]?.focus()
        }
      }
    }
  }

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [countdown])

  const onResendTokenPress = () => setCountdown(1)

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>We sent a token to your email address</Text>

      <View style={styles.inputWrapper}>
        {token.map((value, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => handleInputChange(text, index)}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text style={{ color: "#b7b7b7", fontSize: 16 }}>Didn't receive the TOKEN? Resend in</Text>
        {countdown > 0 ? (
          <Text style={{ fontSize: 16 }}>{countdown}s</Text>
        ) : (
          <Pressable onPress={() => onResendTokenPress()}>
            <Text>RESEND</Text>
          </Pressable>
        )}
      </View>

      <View style={{ marginTop: 30 }}>
        <HBButton
          title="Verify Email"
          onPress={() => navigation.navigate("SuccessPage")}
          disabled={token.join("").length < 4 || countdown !== 0}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    backgroundColor: "#FFFFFF"
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
  },
})
