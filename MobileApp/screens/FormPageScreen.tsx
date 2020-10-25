import { Camera, CameraCapturedPicture } from 'expo-camera';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import * as React from 'react';
import { useState } from 'react';
import {
  DeviceEventEmitter,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import ImagePicker from '../components/ImagePicker';
import MeterInput from '../components/MeterInput';
import { Spinner } from '../components/Spinner';
import { Form } from '../constants/Forms';
import customStyles from '../constants/Styles';
import styles from '../constants/Styles';

// @ts-ignore
const DismissKeyboard = ({children}) => (
  <TouchableNativeFeedback onPress={ () => Keyboard.dismiss() }>
    { children }
  </TouchableNativeFeedback>
);

// @ts-ignore
export default function FormPageScreen({route, navigation}) {
  const form: Form = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstMeter, setFirstMeter] = useState({value: '', serialNumber: ''});
  const [secondMeter, setSecondMeter] = useState({value: '', serialNumber: ''});
  const [currentField, setCurrentField] = useState(0);


  const buttonContent = isLoading ? <Spinner size={ 20 }/> : <Text style={ [styles.textM, styles.whiteText] }>Оплатить</Text>;

  const fakePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Root');
    }, 2000);
  };

  const openCamera = (i: number) => {
    setCurrentField(i);
    Camera.requestPermissionsAsync()
      .then(response => {
        if (response.status === 'granted') {
          setModalVisible(true);
        } else {
          alert('Access denied');
        }
      });
  };

  const sendPhoto = (photo: CameraCapturedPicture | ImageInfo) => {
    setModalVisible(false);
    return fetch('http://192.168.31.123:5000/noSN',
      {
        //method: 'POST'
        // body: JSON.stringify({
        //   base64: photo.base64,
        // })
      })
      .then((response) => response.json())
      .then((json) => {
        // хосподи прости меня за эти костыли
        // но я первый день вижу реакт и мне больно
        switch(currentField) {
          case 1:
            setFirstMeter(json);
            break;
          case 2:
            setSecondMeter(json);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  DeviceEventEmitter.addListener('closeModal', () => setModalVisible(false));
  DeviceEventEmitter.addListener('sendPhoto', (photo) => sendPhoto(photo));

  return (
    <DismissKeyboard>
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
            <TextInput
              style={ [styles.input, {paddingRight: 40}] }
              value={ firstMeter.value }
              onChangeText={ (text) => setFirstMeter({value: text, serialNumber: firstMeter.serialNumber}) }
              keyboardType={ 'numeric' }
            />
            <View style={ [styles.inputHint] }>
              {/*TODO: Добавить текст ошибки*/ }
              <Text style={ styles.grayText }></Text>
            </View>
            { !!firstMeter.serialNumber && (
              <View>
                <Text style={ [styles.grayText, styles.textXS, styles.pb5] }>Серийный номер счетчика</Text>
                <TextInput
                  style={ [styles.input, {paddingRight: 40}] }
                  value={ firstMeter.serialNumber }
                  onChangeText={ (text) => setFirstMeter({value: firstMeter.value, serialNumber: text}) }
                  keyboardType={ 'numeric' }
                />
                <View style={ [customStyles.inputHint] }>
                </View>
              </View>
            ) }
            <View
              style={ customStyles.inputIconContainer }
            >
              <Icon
                style={ customStyles.inputIcon }
                onPress={ () => {
                  openCamera(1);
                } }
                name={ 'center-focus-weak' }
              />
            </View>
          </View>

          <View>
            <Text style={ [styles.grayText, styles.textXS, styles.pb5] }>{ form.labelSecond }</Text>
            <TextInput
              style={ [styles.input, {paddingRight: 40}] }
              value={ secondMeter.value }
              onChangeText={ (text) => setSecondMeter({value: text, serialNumber: secondMeter.serialNumber}) }
              keyboardType={ 'numeric' }
            />
            <View style={ [styles.inputHint] }>
              {/*TODO: Добавить текст ошибки*/ }
              <Text style={ styles.grayText }></Text>
            </View>
            { !!secondMeter.serialNumber && (
              <View>
                <Text style={ [styles.grayText, styles.textXS, styles.pb5] }>Серийный номер счетчика</Text>
                <TextInput
                  style={ [styles.input, {paddingRight: 40}] }
                  value={ secondMeter.serialNumber }
                  onChangeText={ (text) => setSecondMeter({value: secondMeter.value, serialNumber: text}) }
                  keyboardType={ 'numeric' }
                />
                <View style={ [customStyles.inputHint] }>
                </View>
              </View>
            ) }
            <View
              style={ customStyles.inputIconContainer }
            >
              <Icon
                style={ customStyles.inputIcon }
                onPress={ () => {
                  openCamera(2);
                } }
                name={ 'center-focus-weak' }
              />
            </View>
          </View>
        </View>

        <View style={ styles.centerContent }>
          <TouchableHighlight onPress={ () => fakePayment() }>
            <View style={ styles.regularButton }>
              { buttonContent }
            </View>
          </TouchableHighlight>
        </View>

        <Modal
          animationType='slide'
          transparent={ true }
          visible={ modalVisible }
        >
          <View style={ styles.centeredView }>
            <ImagePicker/>
          </View>
        </Modal>
      </View>
    </DismissKeyboard>
  );
}
