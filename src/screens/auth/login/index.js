import React, { useRef, useState } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import { AppLogo, Checked } from '../../../assets/svgs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputConfig from '../../../utils/inputconfig';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import TextInputUI from '../../../components/custom/itemtextinput';
import { Type_Of_Signin_Field, Type_Of_Signup_Field } from '../../../utils/enum';
import Validation from '../../../utils/validation'
import { showToast } from '../../../utils/toast'
import messageutils from '../../../utils/messageutils';
import Routes from '../../../router/routes';
import StyleConfig from '../../../assets/StyleConfig';


const LoginScreen = ({ navigation }) => {
    const itemsRef = useRef([]);
    const [tiEmailAddress, setTiEmailAddress] = useState('')
    const [tiPassword, setTiPassword] = useState('')
    const [inputList, setInputList] = useState(InputConfig.SignInInput)
    const [isChecked, setIsChecked] = useState(false)
    const onSubmitEditing = (index) => {
        const isLast = index !== InputConfig.SignInInput.length - 1
        if (isLast) itemsRef.current[index + 1].focus()
    }

    const onChangeTextHandle = (text, type) => {
        switch (type) {
            case Type_Of_Signin_Field.EmailAddress:
                setTiEmailAddress(text)
                break
            case Type_Of_Signin_Field.Password:
                setTiPassword(text)
                break
        }
    }

    const getInputValue = (index) => {
        switch (index) {
            case Type_Of_Signup_Field.EmailAddress:
                return tiEmailAddress
            case Type_Of_Signup_Field.Password:
                return tiPassword
        }
    }
    const handleOnSignupClick = () => {
        navigation.replace(Routes.SignUp)
    }
    const checkValidationAndSubmit = () => {
        if (!tiEmailAddress.trim().length) {
            showToast(messageutils.Errors.emailBlank)
        }
        else if (Validation.isEmailInvalid(tiEmailAddress)) {
            showToast(messageutils.Errors.emailValidity)
        }
        else if (!tiPassword.trim().length) {
            showToast(messageutils.Errors.pwdInvalid)
        }
        else if (tiPassword.trim().length < 8 || tiPassword.trim().length > 20) {
            showToast(messageutils.Errors.pwdInvalid)
        }
        else {
            //TODO:this navigation call when account is in pending status
            // navigation.navigate(Routes.ApproveAccount, { IsFromLogin: true })
            //TODO:this navigation call when account is alredy activate
            navigation.replace(Routes.Dashboard)
        }

    }

    const handleOnIconClick = (index) => {
        const inputProps = inputList[index]
        inputProps.SecureTextEntry = !inputProps.SecureTextEntry
        setInputList([...inputList])

    }

    const handleOnForgotClick = () => {
        navigation.navigate(Routes.ForgotPassword)
    }

    const RememberButton = () => {
        return (
            <Pressable style={styles.pRememberContainer} onPress={() => { setIsChecked(!isChecked) }}>
                <View style={[styles.vCheckContainer, isChecked && styles.checkedColor]}>
                    <Checked width={StyleConfig.countPixelRatio(12)} height={StyleConfig.countPixelRatio(12)} />
                </View>
                <Text style={[CS.textDarkBlueRegular, styles.tRemember]}>{string.Remember_Me}</Text>
            </Pressable>)
    }

    return (
        <SafeAreaView forceInset={{ top: 'never' }} style={styles.saContainer}>
            <ImageBackground style={styles.ibContainer}>
                <AppLogo />
            </ImageBackground>
            <View style={styles.vContainer}>
                <KeyboardAwareScrollView
                    bounces={false}
                    overScrollMode='never'
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.kavContainer}>
                    <Text style={[CS.textDarkBlueBold, styles.tLogin]}>
                        {string.Login}
                    </Text>
                    <View style={styles.vInputContainer}>
                        {inputList.map((item, index) => {
                            return (
                                <TextInputUI
                                    onSubmitEditing={onSubmitEditing}
                                    ref={el => itemsRef.current[index] = el}
                                    inputProps={item}
                                    index={index}
                                    value={getInputValue(index)}
                                    onRightIconClick={() => { handleOnIconClick(index) }}
                                    onChangeText={onChangeTextHandle}
                                    key={`Input-${index}`} />
                            )
                        })}
                    </View>
                    <Text
                        style={[CS.textPrimaryRegular, styles.tForgotPassword]}
                        onPress={handleOnForgotClick}
                    >{string.Forgot_Password}{string.Question}</Text>
                    <RememberButton />
                    <Pressable style={styles.pButtonContainer} onPress={checkValidationAndSubmit}>
                        <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Login}</Text>
                    </Pressable>

                    <View style={styles.vSpaceContainer} />
                    <Text style={[CS.textLightBlackRegular, styles.tSigupInfoContainer]}>
                        <Text>{string.Dont_Have_Account}</Text>
                        <Text style={[CS.textPrimarySemibold, styles.tSignup]} onPress={handleOnSignupClick}>{string.Space}{string.Signup}</Text>
                    </Text>

                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;
