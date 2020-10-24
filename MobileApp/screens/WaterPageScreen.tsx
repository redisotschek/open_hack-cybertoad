import * as React from 'react';
import {StyleSheet, Alert, Modal, Text, TouchableHighlight, View, TouchableOpacity} from 'react-native';
import {useState} from "react";

import CameraView from '../components/CameraView'

export default function WaterPageScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    const closeCamera = () => {
        setModalVisible(false)
    }
    return (
        <View style={styles.centeredView}>
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

          <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                  setModalVisible(true);
              }}
          >
              <Text style={styles.textStyle}>Show Modal</Text>
          </TouchableHighlight>
        </View>
  )
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
        shadowOffset: {
            width: 0,
            height: 2
        },
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
        marginBottom: 15,
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
