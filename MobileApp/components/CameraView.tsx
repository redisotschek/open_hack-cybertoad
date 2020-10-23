import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

export default function App() {

    let camera: Camera

    const [previewVisible, setPreviewVisible] = React.useState(false)
    const [capturedImage, setCapturedImage] = React.useState<any>(null)

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

    const __sendPhoto = async (photo: any) => {
        console.log('loh')
    }

    const CameraPreview = ({photo, retakePicture, savePhoto}: any) => {
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
                        <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
                    ) : (
                            <Camera
                                style={{ flex: 1, width: "100%" }}
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
                                            left: '5%',
                                            top: '10%',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}
                                    >
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
                                                style={{
                                                    width: 70,
                                                    height: 70,
                                                    bottom: 0,
                                                    borderRadius: 50,
                                                    backgroundColor: '#fff'
                                                }}
                                            />
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
    }
})