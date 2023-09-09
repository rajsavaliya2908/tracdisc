import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import CommonToolbar from '../../../components/custom/commontoolbar'
import { string } from '../../../utils/string';
import { ConfirmEmail } from '../../../assets/svgs';
import AppImages from '../../../assets/pngs';
import CS from '../../../utils/styles';
import OTPInputView from '../../../components/library/otpinput'
import { showToast } from '../../../utils/toast'
import messageutils from '../../../utils/messageutils';
import Routes from '../../../router/routes';
import StyleConfig from '../../../assets/StyleConfig';

const ConfirmEmailScreen = ({ navigation, route }) => {
    const [code, setCode] = useState('')

    const { email, isFromUpdate } = route.params

    const checkValidationAndSubmit = () => {
        if (code.trim().length < 6) {
            showToast(messageutils.Errors.codeBlank)
        }

        else {
            //TODO remove alert and navigation code and add it after api
            handleNavigationOnSubmit()

        }
    }
    const handleNavigationOnSubmit = () => {
        if (isFromUpdate) {
            navigation.navigate(Routes.RequestSubmit, { info: string.Verify_Email_Update_Request, title: string.We_Have_Your_Request })
        }
        else {
            navigation.navigate(Routes.InviteCode)
        }
    }

    const handleOnLeftClick = () => {

        navigation.goBack()


    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Confirm_Email}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            {!isFromUpdate &&
                <>
                    <ConfirmEmail width={StyleConfig.countPixelRatio(80)} height={StyleConfig.countPixelRatio(80)} style={styles.iConfirmEmail} />
                    <Text style={[CS.textBlackBold, styles.tAlmostDone]}>{string.Almost_done}</Text>
                </>}
            <Text style={[CS.textLightBlackRegular, styles.tCodeInfo]}>{string.Please_Enter_5_Didit_Number}</Text>
            <Text style={[CS.textBlackSemibold, styles.tEmail]}>{email}</Text>
            <OTPInputView
                style={styles.otpContainer}
                pinCount={6}
                code={code}
                onCodeChanged={code => { setCode(code) }}
                autoFocusOnLoad
                keyboardType={'phone-pad'}
                codeInputFieldStyle={styles.underlineStyleBase}

            />
            <View style={styles.vSendAgainContainer}>
                <Text style={CS.textLightBlackRegular}>{string.Didnt_Get_code}{string.Space}{string.Question}</Text>
                <Text style={[CS.textPrimaryRegular, styles.tResendNow]}>{string.Resend_Now}</Text>
            </View>
            <View style={styles.vSpaceContainer} />
            <Pressable style={styles.pButtonContainer} onPress={checkValidationAndSubmit}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Continue}</Text>
            </Pressable>
        </SafeAreaView>
    )

}
export default ConfirmEmailScreen;
