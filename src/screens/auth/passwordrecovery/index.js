import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import CommonToolbar from '../../../components/custom/commontoolbar';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'
import OTPInputView from '../../../components/library/otpinput'
import { showToast } from '../../../utils/toast';
import messageutils from '../../../utils/messageutils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Routes from '../../../router/routes';

const PasswordRecoveryScreen = ({ navigation, route }) => {
    const [code, setCode] = useState('')
    const { Email } = route.params
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const checkValidationAndSubmit = () => {
        if (code.trim().length < 5) {
            showToast(messageutils.Errors.codeBlank)
        }
        else {
            //TODO:remove navigator code and add after api call
            navigation.navigate(Routes.ResetPassword)
        }
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Password_Recovery}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            <KeyboardAwareScrollView
                bounces={false}
                overScrollMode='never'
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.kavContainer}
            >
                <Text style={[CS.textBlackBold, styles.tCheckEmail]}>{string.Check_Your_Email}</Text>
                <Text style={[CS.textLightBlackRegular, styles.tWeSent]}>{string.We_Have_Sent_Email}</Text>
                <Text style={[CS.textBlackSemibold, styles.tEmail]}>{Email}</Text>
                <Text style={[CS.textLightBlackRegular, styles.tEmailLinked]}>{string.Email_Linked_Code}</Text>
                <Text style={[CS.textLightBlackRegular, styles.tEmailLinked]}>{string.Please_Enter_Code}</Text>
                <OTPInputView
                    style={styles.otpContainer}
                    pinCount={5}
                    code={code}
                    onCodeChanged={code => { setCode(code) }}
                    autoFocusOnLoad
                    keyboardType={'phone-pad'}
                    codeInputFieldStyle={styles.underlineStyleBase}

                />
                <View style={styles.vSendAgainContainer}>
                    <Text style={CS.textLightBlackRegular}>{string.Didnt_Get_Email}{string.Question}</Text>
                    <Text style={[CS.textPrimaryRegular, styles.tResendNow]}>{string.Resend_Now}</Text>
                </View>
                <View style={styles.vWarningContainer}>
                    <Text style={[CS.textBlackRegular, styles.tWarning]}>{string.Cant_Find_Email_Warning}</Text>
                    <Text style={[CS.textBlackRegular, styles.tWarning]}>{string.If_You_Still_Warning}</Text>
                </View>
            </KeyboardAwareScrollView>
            <Pressable style={styles.pButtonContainer} onPress={checkValidationAndSubmit}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Continue}</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default PasswordRecoveryScreen;
