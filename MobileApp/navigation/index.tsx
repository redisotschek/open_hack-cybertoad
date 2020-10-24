import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {Image} from 'react-native';

import MainPageScreen from '../screens/MainPageScreen';
import WaterPageScreen from '../screens/WaterPageScreen';
import TestPageScreen from '../screens/TestPageScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function LogoTitle() {
  return (
    <Image
      source={require('../assets/images/logo-title.png')}
      style={{
        width: 200,
        height: 40,
      }}
    />
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0ba2d0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Root" component={MainPageScreen} options={{ headerTitle: props => <LogoTitle {...props} />,
        headerTransparent: true,}}/>
      <Stack.Screen name="Water" component={WaterPageScreen} options={{ title: 'Вода' }} />
      <Stack.Screen name="Test" component={TestPageScreen} options={{ title: 'Тестирование' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen}/>
    </Stack.Navigator>
  );
}

