import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "@/components/screens/Welcome"
import HomePage from "@/components/screens/HomePage"
import SelectedDeck from "@/components/screens/SelectedDeck"
import NewDeck from "@/components/screens/NewDeck"

const Stack = createNativeStackNavigator()
export default function HomeScreen() {
  return (
    // <NavigationIndependentTree>
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="NewDeck" component={NewDeck} />
      <Stack.Screen name="SelectedDeck" component={SelectedDeck} />
      {/* <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="VerifyEmail"
            component={VerifyEmail}
            options={{ title: "Verify your email", headerShown: true }}
          />
          <Stack.Screen name="SuccessPage" component={SuccessPage} />
          <Stack.Screen name="Home" component={PersonalizeApproach} />
          <Stack.Screen name="HairType" component={HairType} /> */}
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
