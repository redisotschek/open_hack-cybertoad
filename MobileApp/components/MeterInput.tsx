import { Camera, CameraCapturedPicture } from 'expo-camera';
import { useState } from 'react';
import * as React from 'react';
import { Alert, DeviceEventEmitter, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import customStyles from '../constants/Styles';
import CameraView from './CameraView';
import { Spinner } from './Spinner';

export function MeterInput() {
  const [modalVisible, setModalVisible] = useState(false);

  const closeCamera = () => {
    setModalVisible(false);
  };

  const openCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync();
    if (status === 'granted') {
      setModalVisible(true);
    } else {
      alert('Access denied');
    }
  };

  const sendPhoto = (photo: CameraCapturedPicture) => {
    console.log('uri', photo.uri);
    console.log('base64', photo.base64);
  };

  DeviceEventEmitter.addListener('closeCamera', closeCamera);
  DeviceEventEmitter.addListener('sendPhoto', (photo) => sendPhoto(photo));

  const PhotoBtn = () => {
    return (
      <View
        style={customStyles.inputIconContainer}
      >
        <Icon
          style={customStyles.inputIcon}
          onPress={ () => {
            openCamera();
          } }
          name={ 'center-focus-weak' }
        />
      </View>
    );
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={ true }
        visible={ modalVisible }
        onRequestClose={ () => {
          Alert.alert('Modal has been closed.');
        } }
      >
        <View style={ styles.centeredView }>
          <View style={ styles.modalView }>
            <CameraView></CameraView>
          </View>
        </View>
      </Modal>


      <TextInput
        style={ [customStyles.input, {paddingRight: 40}] }
        keyboardType={ 'numeric' }
      />
      <View style={ [customStyles.inputHint] }>
        {/*TODO: Добавить текст ошибки*/ }
        <Text style={ customStyles.grayText }></Text>
      </View>
      <PhotoBtn/>


      <Modal
        visible={ false }
        transparent={ true }
        animationType={ 'none' }
      >
        <View style={ styles.modalBackground }>
          <Spinner size={ 40 }/>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
    margin: 0,
    alignItems: undefined,
    justifyContent: undefined,
  },
  modalBackground: {
    backgroundColor: '#00000040',
  }
});
