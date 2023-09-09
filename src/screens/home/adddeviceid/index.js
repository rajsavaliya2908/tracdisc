import React from 'react';
import { Text, View, Image, ActivityIndicator, Pressable } from 'react-native';
import CommonToolbar from '../../../components/custom/commontoolbar'
import AppImages from '../../../assets/pngs/index'
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import OTPInputView from '../../../components/library/otpinput'
import { useState } from 'react';
import color from '../../../utils/color';
import Method from '../../../utils/method';
import Routes from '../../../router/routes';

const AddDeviceIdScreen = ({ navigation }) => {
    const [code, setCode] = useState('')
    const [isButtonEnable, setIsButtonEnable] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const handleOnContinueClick = () => {
        setIsLoading(true)
        //TODO:remove this function on api success
        setTimeout(() => {
            manageApiResponse()
            setIsLoading(false)
        }, 2000);
    }
    const manageApiResponse = () => {
        const selectedValue = Method.randomItemFromArray([0, 1, 2])
        if (selectedValue === 1) {
            manageSuccessResponse()
        }
        else if (selectedValue === 2) {
            manageAlreadyAddedDevie()
        }
        else {
            manageUnSuccessResponse()
        }
    }
    const manageAlreadyAddedDevie = () => {
        navigation.navigate(Routes.AlreadySetCoordinate, { deviceId: code })
    }
    const manageUnSuccessResponse = () => {
        navigation.replace(Routes.DeviceIdUnSuccess)

    }
    const manageSuccessResponse = () => {
        navigation.navigate(Routes.ScanAfterAddIdScreen, { deviceId: code })
    }
    const handleOnCodeChange = (code) => {
        if (code.length < 6) {
            setIsButtonEnable(false)
        }
        else {
            setIsButtonEnable(true)
        }
        setCode(code)
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                isLeftButton
                title={string.Step1}
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            <Text style={[CS.textLightBlackBold, styles.tAddDeviceId]}>{string.Add_Device_ID}</Text>
            <Text style={[CS.textLightBlackRegular, styles.tEnterDeviceDetail]}>{string.Enter_The_Device_ID}</Text>
            <Text style={[CS.textLightBlackRegular, styles.tEG]}>{string.E_G_4091}</Text>
            <OTPInputView
                style={styles.otpContainer}
                pinCount={6}
                isDashEnabled
                code={code}
                onCodeChanged={handleOnCodeChange}
                autoFocusOnLoad
                keyboardType={'phone-pad'}
                codeInputFieldStyle={styles.underlineStyleBase}

            />
            <View style={styles.vIndicatorContainer}>
                {isLoading ?
                    <>
                        <ActivityIndicator size='large' color={color.primarycolor} />
                        <Text style={[CS.textLightBlackRegular, styles.tPleaseWait]}>{string.Please_Wait}</Text>
                    </> : null}
            </View>
            <Pressable
                pointerEvents='box-only'
                onPress={handleOnContinueClick}
                disabled={!isButtonEnable}
                style={[styles.pButtonContainer, !isButtonEnable && styles.disableButtonColor]}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Continue}</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default AddDeviceIdScreen;
