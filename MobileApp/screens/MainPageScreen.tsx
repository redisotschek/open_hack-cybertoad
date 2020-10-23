import * as React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import * as NAVIGATION_ITEMS from '../constants/NavigationItems';
import styles from '../constants/Styles';

// @ts-ignore
export default function MainPageScreen({navigation}) {
  return (
    <View
      style={ {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      } }
    >
      <Text
        style={ styles.textStyle }
      >привет</Text>
      <Button
        title="Water"
        onPress={ () => navigation.navigate('Water') }
      />
      <Image
        style={ {width: 50} }
        source={ require('../assets/images/logo-title-black.svg') }
      />
    </View>
  );
}

