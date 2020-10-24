import { useState } from 'react';
import * as React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { Spinner } from '../components/Spinner';
import styles from '../constants/Styles';

export default function TestPageScreen() {
  let [isLoading] = useState(false);

  const buttonContent = isLoading ? <Spinner size={20}/> : <Text style={[styles.textM, styles.whiteText]}>Загрузить фото</Text>;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TouchableHighlight onPress={() => isLoading = true}>
        <View style={styles.regularButton}>
          { buttonContent }
        </View>
      </TouchableHighlight>
    </View>
  );
}
