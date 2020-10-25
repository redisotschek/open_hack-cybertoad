import { useState } from 'react';
import * as React from 'react';
import { TouchableHighlight, View, Text, Image, ScrollView } from 'react-native';
import { Spinner } from '../components/Spinner';
import styles from '../constants/Styles';

export default function TestPageScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultsArray, setResults] = useState(null);

  const buttonContent = isLoading ? <Spinner size={20}/> : <Text style={[styles.textM, styles.whiteText]}>Загрузить фото</Text>;

  const sendPhotos = () => {
    setIsLoading(true);
    return fetch('http://192.168.31.123:5000/array')
      .then((response) => response.json())
      .then((json) => {
        setResults(json);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 5000)

      });
  };

  const results = () => {
    if (!!resultsArray) {
      let results = resultsArray.map((result, i) => {
        const serialNumber = !result.serialNumber
          ? null
          : (
            <View>
              <Text style={ [styles.grayText, styles.textXS, styles.pb5] }>Серийный номер</Text>
              <Text style={styles.testValue}>{result.serialNumber}</Text>
            </View>
          );
        return (
          <View>
            <Text style={ [styles.grayText, styles.textH1, styles.pb5] }>Фото {i+1}</Text>
            <Text style={ [styles.grayText, styles.textXS, styles.pb5] }>Показание счетчика</Text>
            <Text style={styles.testValue}>{result.value}</Text>
            { serialNumber }
          </View>
        );
      })
      return (
        <ScrollView style={styles.testResultsContainer}>
          { results }
        </ScrollView>
      );
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      { results() }
      { isLoading && (<Image source={require('../assets/images/source.gif')} style={{width: 256, height: 256, marginBottom: -40}}/>)}
      <TouchableHighlight underlayColor={'transparent'} onPress={() => sendPhotos()}>
        <View style={[styles.regularButton, {marginVertical: 30}]}>
          { buttonContent }
        </View>
      </TouchableHighlight>
    </View>
  );
}
