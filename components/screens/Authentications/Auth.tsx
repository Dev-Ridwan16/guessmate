import { Image, ScrollView, StyleSheet, View } from "react-native"
import { Colors } from "@/constants/Colors"
import { ComforterFont, SpaceMonoText } from "@/components/ui/CustomText"
import { AuthCard } from "./AuthCard"
import { useState } from "react"
import Login from "./Login"
import { Register } from "./Register"

export const Auth = () => {
  const [activeScreen, setActiveScreen] = useState<"AuthCard" | "Login" | "Register">("AuthCard")

  const renderContent = () => {
    if (activeScreen === "AuthCard")
      return <AuthCard onAuthChipPress={() => setActiveScreen("Login")} />
    else if (activeScreen === "Login")
      return <Login onAuthChipPress={() => setActiveScreen("Register")} />
    else if (activeScreen === "Register")
      return <Register onAuthChipPress={() => setActiveScreen("Login")} />
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={require("@/assets/images/HairBestieLogo.png")} style={styles.logo} />
        <View>
          <View style={styles.authHeaderContainer}>
            <ComforterFont value="Welcome Bestie" size={50} color={Colors.light.tint} />
            <SpaceMonoText
              value={
                activeScreen === "AuthCard" ? "Let's jump right in" : "Please login you account"
              }
              size={18}
            />
            {renderContent()}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  authHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
})
