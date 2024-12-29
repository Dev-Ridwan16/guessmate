import { Colors } from "@/constants/Colors"
import { StyleSheet, View } from "react-native"

export const Wrapper: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return <View style={styles.wrapper}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 30,
    backgroundColor: "#FFFFFF"
  },
})
