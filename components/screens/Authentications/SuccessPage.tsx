import { HBButton } from "@/components/ui/HBButton"
import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, View } from "react-native"

export const SuccessPage: React.FC<{ showBtn?: boolean }> = ({ showBtn = true }) => {
  const navigation = useNavigation<any>()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={styles.container}>
        <Text style={[styles.text, { fontSize: 30 }]}>Successful!</Text>
        <Image source={require("@/assets/images/fetti.png")} style={styles.image} />
        <Text style={styles.text}>You've verified your email Successfully!</Text>
      </View>
      {showBtn && <HBButton title="Go to Home" onPress={() => navigation.navigate("Home")} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
})
