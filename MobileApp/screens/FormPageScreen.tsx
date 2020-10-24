import { useState } from 'react';
import * as React from 'react';
import {
  Text,
  View,
  TextInput, TouchableHighlight,
} from 'react-native';
import { MeterInput } from '../components/MeterInput';
import { Spinner } from '../components/Spinner';
import { Form } from '../constants/Forms';
import styles from '../constants/Styles';

// @ts-ignore
export default function FormPageScreen({route, navigation}) {
  const form: Form = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const buttonContent = isLoading ? <Spinner size={20}/> : <Text style={[styles.textM, styles.whiteText]}>Оплатить</Text>;

  const fakePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Root');
    }, 2000)
  };

  return (
    <View
      style={ {
        flex: 1,
      } }
    >

      <View style={ [styles.px10, styles.py15] }>
        <Text style={ [styles.grayText, styles.textXS, styles.pb5] }>ФИО</Text>
        <TextInput
          style={ [styles.input, styles.inputDisabled] }
          value={ 'Милос Рикардо' }
          editable={ false }
        />
        <View style={ [styles.inputHint] }>
        </View>

        <View>
          <Text style={ [styles.grayText, styles.textXS, styles.pb5] }>{ form.labelFirst }</Text>
          <MeterInput/>
        </View>

        <View>
          <Text style={ [styles.grayText, styles.textXS, styles.pb5] }>{ form.labelSecond }</Text>
          <MeterInput/>
        </View>
      </View>

      <View style={ styles.centerContent }>
        <TouchableHighlight onPress={() => fakePayment()}>
          <View style={ styles.criticalButton }>
            { buttonContent }
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
