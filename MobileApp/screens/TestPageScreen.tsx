import * as React from 'react';
import { TouchableHighlight, View, Text, Animated, Easing } from 'react-native';
import { Spinner } from '../components/Spinner';
import styles from '../constants/Styles';

export default function TestPageScreen() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TouchableHighlight>
        <View style={styles.regularButton}>
          <Text style={[styles.textM, styles.whiteText]}>Загрузить фото</Text>
        </View>
      </TouchableHighlight>

      <Spinner/>
    </View>
  );
}

