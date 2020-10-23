import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image } from 'react-native';

import MainPageScreen from '../screens/MainPageScreen';
import WaterPageScreen from '../screens/WaterPageScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();


function LogoTitle() {
  return (
    <Image
      style={{ width: 50 }}
      source={require('../assets/images/logo-title.svg')}
    />
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Root" component={MainPageScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
      <Stack.Screen name="Water" component={WaterPageScreen} options={{ title: 'Вода' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen}/>
    </Stack.Navigator>
  );
}

