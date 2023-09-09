import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import CommonToolbar from '../../../components/custom/commontoolbar';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'
import { CheckMark } from '../../../assets/svgs/index'
import TextInputUI from '../../../components/custom/itemtextinput';
import InputConfig from '../../../utils/inputconfig';
import messageutils from '../../../utils/messageutils';
import Validation from '../../../utils/validation';
import Routes from '../../../router/routes';
import { showToast } from '../../../utils/toast';
import StyleConfig from '../../../assets/StyleConfig';

const ForgotPasswordScreen = ({ navigation }) => {
    const [tiEmail, setTiEmail] = useState('')
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const onChangeTextHandle = (text) => {
        setTiEmail(text)
    }
    const checkValidationAndSubmit = () => {
        if (!tiEmail.trim().length) {
            showToast(messageutils.Errors.emailBlank)
        }
        else if (Validation.isEmailInvalid(tiEmail)) {
            showToast(messageutils.Errors.emailValidity)
        }
        else {
            // TODO:remove this navigator and add after Api
            navigation.navigate(Routes.PasswordRecovery, { Email: tiEmail })
        }
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Forgot_Password}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            <View style={styles.vTitleInfoContainer}>
                <Text style={[CS.textBlackBold, styles.tTitle]}>{string.Having_Trouble_Login}{string.Question}</Text>
                <View style={styles.vInstructionContainer}>
                    <View style={styles.vRowTitleInfoContainer}>
                        <CheckMark style={styles.iCheckMark} width={StyleConfig.countPixelRatio(22)} height={StyleConfig.countPixelRatio(22)} />
                        <Text style={[[CS.textLightBlackRegular, styles.tTitleInfo]]}>{string.Usernames_Form_Email}</Text>
                    </View>
                    <View style={styles.vRowTitleInfoContainer}>
                        <CheckMark style={styles.iCheckMark} width={StyleConfig.countPixelRatio(22)} height={StyleConfig.countPixelRatio(22)} />
                        <Text style={[[CS.textLightBlackRegular, styles.tTitleInfo]]}>{string.Password_Case_Sensitive}</Text>
                    </View>
                </View>
            </View>
            <Text style={[CS.textLightBlackRegular, styles.tAddEmailInfo]}>{string.To_Reset_Add_Below_Email}</Text>
            <View style={styles.vInputContainer}>
                <TextInputUI
                    inputProps={InputConfig.ForgotPassword}
                    value={tiEmail}
                    onChangeText={onChangeTextHandle}
                />
            </View>
            <View style={styles.vWarningContainer}>
                <Text style={[CS.textBlackRegular, styles.tWarning]}>{string.If_Email_Linked_Warning}</Text>
                <Text style={[CS.textBlackRegular, styles.tWarning]}>{string.If_Email_Linked_Warning}</Text>
            </View>
            <View style={styles.vSpaceContainer} />
            <Pressable style={styles.pButtonContainer} onPress={checkValidationAndSubmit}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Continue}</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default ForgotPasswordScreen;
