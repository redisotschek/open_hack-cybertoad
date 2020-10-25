import { Camera, CameraCapturedPicture } from 'expo-camera';
import { useState } from 'react';
import * as React from 'react';
import { Alert, DeviceEventEmitter, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import customStyles from '../constants/Styles';
import CameraView from './CameraView';
import { Spinner } from './Spinner';
import ImagePicker from "./ImagePicker";

export function MeterInput() {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('')
  const [serialNumber, setSerialNumber] = useState('')

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }


const sendPhoto = (photo: CameraCapturedPicture): Promise<void> => {
    return fetch('http://192.168.31.123:5000/fullData',
        {
            //method: 'POST'
            // body: JSON.stringify({
            //   base64: photo.base64,
            // })
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState(Object.assign(this.state, json ));
        })
        .catch((error) => {
            console.error(error);
        });
};

  DeviceEventEmitter.addListener('closeModal', closeModal);
  DeviceEventEmitter.addListener('sendPhoto', (photo) => sendPhoto(photo));

  const PhotoBtn = () => {
    return (
      <View
        style={customStyles.inputIconContainer}
      >
        <Icon
          style={customStyles.inputIcon}
          onPress={ () => {
            openModal();
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
            {/*<CameraView></CameraView>*/}
            <ImagePicker></ImagePicker>
          </View>
        </View>
      </Modal>


      <TextInput
        style={ [customStyles.input, {paddingRight: 40}] }
        value={value}
        keyboardType={ 'numeric' }
      />
      <View style={ [customStyles.inputHint] }>
        {/*TODO: Добавить текст ошибки*/ }
        <Text style={ customStyles.grayText }></Text>
      </View>
        { !!serialNumber && (
            <View>
                <Text style={ [customStyles.grayText, customStyles.textXS, customStyles.pb5] }>Серийный номер счетчика</Text>
                <TextInput
                    style={ [customStyles.input, {paddingRight: 40}] }
                    value={ serialNumber }
                    keyboardType={ 'numeric' }
                />
                <View style={ [customStyles.inputHint] }>
                </View>
            </View>
        ) }
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
  },
});
