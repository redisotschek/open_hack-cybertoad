import * as React from 'react';
import {
  StyleSheet,
  Alert,
  Modal,
  Text,
  View,
  TextInput,
  DeviceEventEmitter,
} from 'react-native';
import { useState } from 'react';
import { Spinner } from '../components/Spinner';
import customStyles from '../constants/Styles';

import CameraView from '../components/CameraView';
import { Icon } from 'react-native-elements';
import { Camera } from 'expo-camera';

export default function WaterPageScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const closeCamera = () => {
    setModalVisible(false);
  };

  const openCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync();
    if (status === 'granted') {
      // do something
      setModalVisible(true);
    } else {
      alert('Access denied');
    }
  };

  const eventListener = DeviceEventEmitter.addListener('closeCamera', closeCamera);

  const PhotoBtn = () => {
    return (
      <View
        style={ {
          position: 'absolute',
          right: 0,
          top: '33%',
        } }

      >
        <Icon
          style={ {
            width: 36,
            height: 36,
            opacity: 0.5,
          } }
          onPress={ () => {
            openCamera();
          } }
          name={ 'center-focus-weak' }
        />
      </View>
    );
  };

  return (
    <View
      style={ {
        flex: 1,
      } }
    >
      <Modal
        animationType="slide"
        transparent={ true }
        visible={ modalVisible }
        presentationStyle={ 'overFullScreen' }
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

      <Modal
        visible={ false }
        transparent={ true }
        animationType={ 'none' }
      >
        <View style={ customStyles.modalBackground }>
          <Spinner size={ 40 }/>
        </View>
      </Modal>

      <View style={ [customStyles.px10, customStyles.py15] }>
        <Text style={[customStyles.grayText, customStyles.textXS, customStyles.pb5]}>ФИО</Text>
        <TextInput
          style={ [customStyles.input, customStyles.inputDisabled] }
          value={ 'Милос Рикардо' }
          editable={ false }
        />
        <View style={ [customStyles.inputHint] }>
        </View>

        <View>
          <Text style={[customStyles.grayText, customStyles.textXS, customStyles.pb5]}>Холодная вода</Text>
          <TextInput
            style={ [customStyles.input, {paddingRight: 40}] }
            keyboardType={ 'numeric' }
          />
          <View style={ [customStyles.inputHint] }>
            {/*TODO: Добавить текст ошибки?*/ }
            <Text style={ customStyles.grayText }></Text>
          </View>
          <PhotoBtn/>
        </View>

        <View>
          <Text style={[customStyles.grayText, customStyles.textXS, customStyles.pb5]}>Горячая вода</Text>
          <TextInput
            style={ [customStyles.input, {paddingRight: 40}] }
            keyboardType={ 'numeric' }
          />
          <View style={ [customStyles.inputHint] }>
            {/*TODO: Добавить текст ошибки?*/ }
            <Text style={ customStyles.grayText }></Text>
          </View>
          <PhotoBtn/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
    margin: 0, // This is the important style you need to set
    alignItems: undefined,
    justifyContent: undefined,
  },
  openButton: {
    backgroundColor: '#f194ff',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 25,
    height: 20,
    top: 20,
    right: 20,
    backgroundColor: 'transparent',
  },
});
