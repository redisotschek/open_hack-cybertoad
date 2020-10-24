import * as React from 'react';
import {
  StyleSheet,
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  TextInput, Image, Button,
    DeviceEventEmitter
} from 'react-native';
import { useState } from 'react';
import customStyles from '../constants/Styles';

import CameraView from '../components/CameraView';

export default function WaterPageScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const cameraImg = require('../assets/images/camera.png');

    const closeCamera = () => {
        setModalVisible(false)
    }

    const eventListener = DeviceEventEmitter.addListener('closeCamera', closeCamera);

    return (
      <View style={{
          flex: 1,
      }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                      <CameraView></CameraView>
                  </View>
              </View>
            </Modal>

      <View style={ customStyles.px10 }>
        <TextInput
          style={ [customStyles.input, customStyles.inputDisabled] }
          value={ 'Милос Рикардо' }
          editable={ false }
        />
        <View style={ [customStyles.inputHint] }>
          <Text style={ customStyles.grayText }>ФИО</Text>
        </View>

        <View>
          <TextInput
            style={ [customStyles.input, {paddingRight: 40}] }
            keyboardType={ 'numeric' }
          />
          <View style={ [customStyles.inputHint] }>
            <Text style={ customStyles.grayText }>Холодная вода</Text>
          </View>
          <TouchableHighlight
            style={{
              position: 'absolute',
              right: 5,
              top: '25%',
            }}
            onPress={ () => {
              setModalVisible(true);
            } }
          >
            <Image
              source={ cameraImg }
              style={ {
                width: 35,
                height: 35,
                opacity: 0.5,
              } }
            />
          </TouchableHighlight>
        </View>

        <View>
          <TextInput
            style={ [customStyles.input, {paddingRight: 40}] }
            keyboardType={ 'numeric' }
          />
          <View style={ [customStyles.inputHint] }>
            <Text style={ customStyles.grayText }>Горячая вода</Text>
          </View>
          <TouchableHighlight
            style={{
              position: 'absolute',
              right: 5,
              top: '25%',
            }}
            onPress={ () => {
              setModalVisible(true);
            } }
          >
            <Image
              source={ cameraImg }
              style={ {
                width: 35,
                height: 35,
                opacity: 0.5,
              } }
            />
          </TouchableHighlight>
        </View>
      </View>
      {/*<View*/}
      {/*  style={{*/}
      {/*    position: 'absolute',*/}
      {/*    bottom: 30,*/}
      {/*    width: '100%',*/}
      {/*    justifyContent: 'center'*/}
      {/*  }}*/}
      {/*>*/}
      {/*<Button*/}
      {/*  title={'Оплатить'}*/}
      {/*/>*/}
      {/*</View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        flex: 1,
        width: "100%",
        position: "relative",
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        textAlign: "center"
    },
    closeButton: {
        marginTop: 25,
        height: 20,
        top: 20,
        right: 20,
        backgroundColor: "transparent"
    }
});
