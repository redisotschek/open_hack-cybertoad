import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image } from 'react-native';

import MainPageScreen from '../screens/MainPageScreen';
import FormPageScreen from '../screens/FormPageScreen';
import TestPageScreen from '../screens/TestPageScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={ LinkingConfiguration }
      theme={ DefaultTheme }
    >
      <RootNavigator/>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function LogoTitle() {
  return (
    <Image
      source={ require('../assets/images/logo-title.png') }
      style={ {
        width: 200,
        height: 40,
      } }
    />
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={ {
        headerStyle: {
          backgroundColor: '#0ba2d0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      } }
    >
      <Stack.Screen
        name="Root"
        component={ MainPageScreen }
        options={ {
          headerTitle: () => <LogoTitle/>,
          headerTransparent: true,
        } }
      />
      <Stack.Screen
        name="Form"
        component={ FormPageScreen }
        options={ {title: 'Коммунальные услуги'} }
      />
      <Stack.Screen
        name="Test"
        component={ TestPageScreen }
        options={ {
          title: 'Тестирование',
          headerStyle: {
            backgroundColor: '#535E6E',
          },
        } }
      />
      <Stack.Screen
        name="NotFound"
        component={ NotFoundScreen }
      />
    </Stack.Navigator>
  );
}

