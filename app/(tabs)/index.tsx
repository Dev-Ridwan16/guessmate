import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "@/components/screens/Welcome"
import HomePage from "@/components/screens/HomePage"
import SelectedDeck from "@/components/screens/SelectedDeck"
import NewDeck from "@/components/screens/NewDeck"
import StartDeck from "@/components/screens/StartDeck"
import { Provider } from "react-redux"
import { store } from "../store"
import Result from "@/components/screens/Result"

const Stack = createNativeStackNavigator()
export default function HomeScreen() {
  return (
    // <NavigationIndependentTree>
    // <NavigationContainer>
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="NewDeck" component={NewDeck} />
        <Stack.Screen name="SelectedDeck" component={SelectedDeck} />
        <Stack.Screen name="StartDeck" component={StartDeck} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </Provider>
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
