import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveData = async (key: string, value: any) => {
  try {
    const existingData = await AsyncStorage.getItem(key)
    const parsedData = existingData ? JSON.parse(existingData) : []
    const updatedData = [...parsedData, value]
    await AsyncStorage.setItem(key, JSON.stringify(updatedData))
  } catch (error: any) {
    alert(error.message)
  }
}

export const fetchData = async (key: string) => {
  try {
    const storedData = await AsyncStorage.getItem(key)
    const data = storedData ? JSON.parse(storedData) : []
    return data
  } catch (error: any) {
    alert("Error fetching decks: " + error.message)
    return []
  }
}
