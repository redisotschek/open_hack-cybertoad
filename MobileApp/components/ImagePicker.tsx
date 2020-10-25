import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, DeviceEventEmitter} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CameraView from './CameraView';
import Constants from 'expo-constants';
import {Camera, CameraCapturedPicture} from "expo-camera";
import {Icon} from "react-native-elements";

export default function ImagePickerExample({multipleSelection}: any) {
    const [image, setImage] = useState(null);
    const [camera, setCamera] = useState(false);

    multipleSelection = multipleSelection || false;

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
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
    }

    DeviceEventEmitter.addListener('closeCamera', closeCamera);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            sendPhoto(result)
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Сделать снимок" onPress={makePhoto}/>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
                style={ {
                    position: 'absolute',
                    left: '0%',
                    top: '0%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                } }
            >
                <View style={ {flexDirection: 'row', flex: 1, width: '100%', justifyContent: 'flex-start', marginTop: 30} }>
                    <Icon
                        style={ {
                            padding: 20,
                            fontSize: 20,
                        } }
                        color="#fff"
                        onPress={ closeModal }
                        name='close'
                    />
                </View>
            </View>
            {camera && <CameraView></CameraView>}
            {!camera && <SelectButtons></SelectButtons>}
        </View>
    );
}
