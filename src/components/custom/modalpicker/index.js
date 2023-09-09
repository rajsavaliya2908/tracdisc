import React, { useState } from 'react';
import { Pressable, View, Text, Platform } from 'react-native';
import ModalBox from '../../library/ModalBox'
import styles from './styles'
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import CS from '../../../utils/styles'
import { string } from '../../../utils/string';
import { showToast } from '../../../utils/toast';
import messageutils from '../../../utils/messageutils';
import * as ImagePicker from 'react-native-image-picker';


const ModalPicker = ({ isPickerModalOpen, onSelectImage, pickerModalCloseListener }) => {


    const reuestPermissions = (type) => {
        var permission;
        switch (type) {
            case 'Camera':
                permission = Platform.select({
                    ios: PERMISSIONS.IOS.CAMERA,
                    android: PERMISSIONS.ANDROID.CAMERA,
                })
                break
            case 'Gallery':
                permission = Platform.select({
                    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
                    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                })
                break
        }

        request(permission).then((result) => {
            console.log(result)
            switch (result) {
                case RESULTS.GRANTED:
                    handleGrantPermission(type)
                    break
                case RESULTS.BLOCKED:
                    handleBlockedPermission(type)
                    break
            }
        }).catch(error => {
            console.log(error.message, 'Error')
        })
    }
    const handleBlockedPermission = (type) => {
        switch (type) {
            case 'Camera':
                showToast(messageutils.PermissionMessage.cameraPermissionSetting)
                break
            case 'Gallery':
                showToast(messageutils.PermissionMessage.photoPermissionSetting)
                break
        }
    }
    const handleGrantPermission = (type) => {
        switch (type) {
            case 'Camera':
                handleCameraOption()
                break
            case 'Gallery':
                handleGalleryOption()
                break
        }
    }

    const handleCameraOption = () => {
        pickerModalCloseListener()
        ImagePicker.launchCamera(
            {
                mediaType: 'photo',
                cameraType: 'front'

            },
            (response) => {
                onSelectImage(response)
            },
            (error) => {
                showToast(error.message)
            }
        )
    }
    const handleGalleryOption = () => {
        pickerModalCloseListener()
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
            },
            (response) => {
                onSelectImage(response)

            },
            (error) => {
                showToast(error.message)
            }
        )

    }


    return (
        <ModalBox
            isOpen={isPickerModalOpen}
            onClosed={pickerModalCloseListener}
            position="bottom"
            entry="bottom"
            style={styles.modalContainer}
            swipeToClose={false}>
            <View style={styles.vCameraContainer}>
                <Pressable
                    onPress={() => {
                        reuestPermissions('Camera')
                    }}
                    style={styles.pButtonContainer}
                    activeOpacity={0.8}>
                    <Text style={[CS.textBlackRegular, styles.tTitle]}>
                        {string.Take_Selfie}
                    </Text>
                </Pressable>
                <View style={styles.vLineContainer} />
                <Pressable
                    onPress={() => {
                        reuestPermissions('Gallery')
                    }}
                    style={styles.pButtonContainer}
                    activeOpacity={0.8}>
                    <Text style={[CS.textBlackRegular, styles.tTitle]}>
                        {string.Upload_From_Photos}
                    </Text>
                </Pressable>
            </View>
            <Pressable
                style={styles.pCancelContainer}
                activeOpacity={0.8}
                onPress={pickerModalCloseListener}>
                <Text style={[CS.textBlackSemibold, styles.tCancel]}>
                    {string.Cancel}
                </Text>
            </Pressable>
        </ModalBox>
    );
}

export default ModalPicker;
