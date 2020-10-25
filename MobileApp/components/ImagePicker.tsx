import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, DeviceEventEmitter, TouchableHighlight, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../constants/Styles';
import CameraView from './CameraView';
import Constants from 'expo-constants';
import { Camera, CameraCapturedPicture } from 'expo-camera';
import { Icon } from 'react-native-elements';

export default function ImagePickerExample({multipleSelection}: any) {
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(false);

  multipleSelection = multipleSelection || false;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {status} = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Чтобы приложение работало, нам нужен доступ к вашей галерее!');
        }
      }
    })();
  }, []);

  const closeCamera = () => {
    setCamera(false);
  };

  const closeModal = () => {
    DeviceEventEmitter.emit('closeModal');
  };

  DeviceEventEmitter.addListener('closeCamera', closeCamera);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      sendPhoto(result);
    }
  };

  const makePhoto = async () => {
    const {status} = await Camera.requestPermissionsAsync();
    if (status === 'granted') {
      setCamera(true);
    } else {
      alert('Нет доступа к камере');
    }
  };

  const sendPhoto = async (photo) => {
    DeviceEventEmitter.emit('sendPhoto', photo);
  };

  const SelectButtons = () => {
    return (
      <View style={ styles.imagePickerMenu }>
        <View style={ styles.imagePickerMenuButtons }>
          <TouchableHighlight
            underlayColor={ 'transparent' }
            onPress={ makePhoto }
          >
            <Text style={ [styles.whiteText, styles.textL, styles.py15] }>Сделать снимок</Text>
          </TouchableHighlight>
            <View
              style={styles.hr}
            />
          <TouchableHighlight
            underlayColor={ 'transparent' }
            onPress={ pickImage }
          >
            <Text style={ [styles.whiteText, styles.textL, styles.py15] }>Выбрать из галереи</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={ styles.imagePickerMenuButtons }
          underlayColor={ 'transparent' }
          onPress={ closeModal }
        >
          <Text style={ [styles.whiteText, styles.textL, styles.py15] }>Отмена</Text>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }>
      { camera ? <CameraView/> : <SelectButtons/> }
    </View>
  );
}
