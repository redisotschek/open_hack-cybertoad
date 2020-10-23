import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as Font from 'expo-font';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const customFonts = {
  Druk: require("./assets/fonts/DrukTextCy-Medium-App.ttf"),
  Graphik: require("./assets/fonts/GraphikLC-Regular-Desktop.otf")
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const __loadFonts = async () => {
    await Font.loadAsync(customFonts);
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    __loadFonts();
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
