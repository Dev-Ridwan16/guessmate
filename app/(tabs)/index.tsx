import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Auth } from "@/components/screens/Authentications/Auth"
import { Home } from "@/components/screens/Home"
import Login from "@/components/screens/Authentications/Login"
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native"
import { Register } from "@/components/screens/Authentications/Register"
import { VerifyEmail } from "@/components/screens/Authentications/VerifyEmail"
import { SuccessPage } from "@/components/screens/Authentications/SuccessPage"
import { PersonalizeApproach } from "@/components/screens/PersonalizeApproach"
import { HairType } from "@/components/screens/HairType"

const Stack = createNativeStackNavigator()
export default function HomeScreen() {
  return (
    // <NavigationIndependentTree>
      // <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="VerifyEmail"
            component={VerifyEmail}
            options={{ title: "Verify your email", headerShown: true }}
          />
          <Stack.Screen name="SuccessPage" component={SuccessPage} />
          <Stack.Screen name="Home" component={PersonalizeApproach} />
          <Stack.Screen name="HairType" component={HairType} />
        </Stack.Navigator>
      // </NavigationContainer>
    // </NavigationIndependentTree>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 50,
//   },
//   wrapper: {
//     flex: 1,
//     maxWidth: "90%",
//     marginHorizontal: "auto",
//     width: "100%",
//     borderRadius: 10,
//   },
// })
