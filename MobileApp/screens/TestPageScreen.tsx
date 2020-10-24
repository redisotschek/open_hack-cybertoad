import { useState } from 'react';
import * as React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { Spinner } from '../components/Spinner';
import styles from '../constants/Styles';

export default function TestPageScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const buttonContent = isLoading ? <Spinner size={20}/> : <Text style={[styles.textM, styles.whiteText]}>Загрузить фото</Text>;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image source={require('../assets/images/source.gif')} style={{width: 256, height: 256, marginBottom: -10}}/>
      <TouchableHighlight onPress={() => setIsLoading(true)}>
        <View style={styles.regularButton}>
          { buttonContent }
        </View>
      </TouchableHighlight>

    </View>
  );
}
