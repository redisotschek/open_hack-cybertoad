import { Camera, CameraCapturedPicture } from 'expo-camera';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import { Component } from 'react';
import * as React from 'react';
import { DeviceEventEmitter, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import customStyles from '../constants/Styles';
import { Spinner } from './Spinner';
import ImagePicker from './ImagePicker';

export default class MeterInput extends Component<{}, { modalVisible: boolean, value: string, serialNumber: string }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      modalVisible: false,
      value: '',
      serialNumber: '',
    };
  }

  componentDidMount(): void {
    DeviceEventEmitter.addListener('closeModal', () => this.switchModal(false));
    DeviceEventEmitter.addListener('sendPhoto', (photo) => this.sendPhoto(photo));
  }

  photoBtn(): JSX.Element {
    return (
      <View
        style={ customStyles.inputIconContainer }
      >
        <Icon
          style={ customStyles.inputIcon }
          onPress={ () => {
            this.openCamera();
          } }
          name={ 'center-focus-weak' }
        />
      </View>
    );
  };

  switchModal(value: boolean = true): void {
    this.setState(Object.assign(this.state, {modalVisible: value}));
  };

  openCamera() {
    Camera.requestPermissionsAsync()
      .then(response => {
        if (response.status === 'granted') {
          this.switchModal();
        } else {
          alert('Access denied');
        }
      });
  };

  sendPhoto(photo: CameraCapturedPicture | ImageInfo): Promise<void> {
    this.switchModal(false);
    return fetch('http://192.168.31.123:5000/fullData',
      {
        //method: 'POST'
        // body: JSON.stringify({
        //   base64: photo.base64,
        // })
      })
      .then((response) => response.json())
      .then((json) => {
        this.setState(Object.assign(this.state, json));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render(): JSX.Element {
    return (
      <View>
        <Modal
          animationType='slide'
          transparent={ true }
          visible={ this.state.modalVisible }
        >
          <View style={ styles.centeredView }>
            <ImagePicker></ImagePicker>
          </View>
        </Modal>


        <TextInput
          style={ [customStyles.input, {paddingRight: 40}] }
          value={ this.state.value }
          keyboardType={ 'numeric' }
        />
        <View style={ [customStyles.inputHint] }>
          {/*TODO: Добавить текст ошибки*/ }
          <Text style={ customStyles.grayText }></Text>
        </View>
        { !!this.state.serialNumber && (
          <View>
            <Text style={ [customStyles.grayText, customStyles.textXS, customStyles.pb5] }>Серийный номер счетчика</Text>
            <TextInput
              style={ [customStyles.input, {paddingRight: 40}] }
              value={ this.state.serialNumber }
              keyboardType={ 'numeric' }
            />
            <View style={ [customStyles.inputHint] }>
            </View>
          </View>
        ) }
        { this.photoBtn() }


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
  };
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    backgroundColor: '#00000040',
  },
});
