import React from 'react'
import {Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, DeviceEventEmitter} from 'react-native'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

import { Icon } from 'react-native-elements'

export default function App() {

    let camera: Camera

    const [previewVisible, setPreviewVisible] = React.useState(false)
    const [capturedImage, setCapturedImage] = React.useState<any>(null)
    const [flashMode, setFlashMode] = React.useState(false)

    const __takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
        setPreviewVisible(true)
        setCapturedImage(photo)
    }

    const __savePhoto = async () => {
        let res = await MediaLibrary.saveToLibraryAsync(capturedImage.uri)
        __sendPhoto(capturedImage)
        setPreviewVisible(false)
        setCapturedImage(null)
    }

    const __retakePicture = () => {
        setCapturedImage(null)
        setPreviewVisible(false)
    }

    const __closeCamera = () => {
        setCapturedImage(null)
        setPreviewVisible(false)
        DeviceEventEmitter.emit('closeCamera');
    }

    const __changeFlashMode = () => {
        setFlashMode(!flashMode)
    }

    const __sendPhoto = async (photo: any) => {
        console.log('loh')
    }

    const CameraPreview = ({photo, retakePicture, savePhoto, closeCamera}: any) => {
        return (
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              width: '100%',
              height: '100%'
            }}
          >
            <ImageBackground
              source={{uri: photo && photo.uri}}
              style={{
                flex: 1
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  padding: 15,
                  justifyContent: 'flex-end'
                }}
              >
                  <View
                      style={{
                          position: 'absolute',
                          left: '0%',
                          top: '0%',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                      }}
                  >
                      <View style={{flexDirection: "row", flex: 1, width: "100%", justifyContent: 'flex-start'}}>
                          <Icon
                              style={{
                                  padding: 20,
                                  fontSize: 20
                              }}
                              color="#fff"
                              onPress={__closeCamera}
                              name='close' />
                      </View>
                  </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <TouchableOpacity
                    onPress={retakePicture}
                    style={{
                      width: 130,
                      height: 40,
                      alignItems: 'center',
                      borderRadius: 4
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20
                      }}
                    >
                      Переснять
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={savePhoto}
                    style={{
                      width: 130,
                      height: 40,
                      alignItems: 'center',
                      borderRadius: 4
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20
                      }}
                    >
                      Отправить
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        )
    }

    return (
        <View
                    style={{
                        flex: 1,
                        width: '100%'
                    }}
                >
                    {previewVisible && capturedImage ? (
                        <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} closeCamera={__closeCamera} />
                    ) : (
                            <Camera
                                style={{ flex: 1, width: "100%" }}
                                flashMode={flashMode ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                                ref={(r) => {
                                    camera = r
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        width: '100%',
                                        backgroundColor: 'transparent',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <View
                                        style={{
                                            position: 'absolute',
                                            left: '0%',
                                            top: '0%',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <View style={{flexDirection: "row", flex: 1, width: "100%", justifyContent: 'space-between'}}>
                                            <Icon
                                                style={{
                                                    padding: 20,
                                                    fontSize: 20
                                                }}
                                                color="#fff"
                                                onPress={__closeCamera}
                                                name='close' />
                                            <Icon
                                                style={{
                                                    padding: 20,
                                                    fontSize: 20
                                                }}
                                                color="#fff"
                                                onPress={__changeFlashMode}
                                                name={!!flashMode ? 'flash-on' : 'flash-off'} />
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            flexDirection: 'row',
                                            flex: 1,
                                            width: '100%',
                                            padding: 20,
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                flex: 1,
                                                alignItems: 'center'
                                            }}
                                        >
                                            <TouchableOpacity
                                                onPress={__takePicture}
                                            >
                                                <Image style={{
                                                    width: 70,
                                                    height: 68,
                                                    bottom: 20,
                                                    borderRadius: 50,
                                                }} source={require('../assets/images/open-logo.png')}/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Camera>
                        )}
                </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'Druk',
    },
    closeButton: {
        backgroundColor: "transparent",
        width: 50
    }
})
