import { useEffect, useState } from 'react';
import * as React from 'react';
import { Animated, Easing } from 'react-native';

export function Spinner(props: { size: number }) {
  const spinValue = new Animated.Value(0);
  const [size,setSize] = useState(20);
  useEffect(()=>{
    setSize(props.size);
  },[props.size]);

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
        width: size,
        height: size,
      }}
      source={require('../assets/images/logo-spinner.png')} />
  )
}
