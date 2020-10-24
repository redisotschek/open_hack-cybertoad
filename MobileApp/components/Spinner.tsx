import * as React from 'react';
import { Animated, Easing } from 'react-native';

export function Spinner() {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      style={{
        transform: [{rotate: spin}],
        width: 22,
        height: 22,
      }}
      source={require('../assets/images/camera.png')} />
  )
}
