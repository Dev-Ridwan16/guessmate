import { useNavigation } from 'expo-router';
import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, View, Image } from 'react-native';

const Welcome: React.FC = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const navigate = useNavigation<any>()

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.2,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    const timeout = setTimeout(() => {
      navigate.navigate("HomePage")
    }, 5000)

    return () => clearTimeout(timeout)
  }, [scaleAnim, opacityAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('@/assets/images/guessmate_logo.png')}
        style={{ transform: [{ scale: scaleAnim }] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
