import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { ComforterFont } from "../ui/CustomText"
import { HBButton } from "../ui/HBButton"
import { useNavigation } from "@react-navigation/native"

export const PersonalizeApproach = () => {
  const navigate = useNavigation<any>()
  return (
    <ScrollView>
      <Image source={require("@/assets/images/PHairCare.png")} />
      <View style={styles.wrapperShadow}>
        <View
          style={{ 
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              width: 250,
            }}
          >
            <ComforterFont value="Personalize your haircare routine" size={50} align="center" />
          </View>
          <Text style={{ fontSize: 20, textAlign: "center", lineHeight: 30, marginVertical: 15 }}>
            Get reminders and track your haircare journey with your personalized routine or allow us
            recommend a routine for you
          </Text>

          <View style={{ flexDirection: "column", gap: 10, width: "100%", marginTop: 20 }}>
            <HBButton
              title="Personalize your account"
              onPress={() => navigate.navigate("HairType")}
            />
            <HBButton title="May be later" onPress={() => {}} backgroundOff />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapperShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "#fff",
    padding: 16,
    height: 450,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    zIndex: 1000,
    top: -70,
  },
})
