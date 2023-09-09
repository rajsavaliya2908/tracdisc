import React, { useRef, useState } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import { AppLogo } from '../../../assets/svgs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputConfig from '../../../utils/inputconfig';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import TextInputUI from '../../../components/custom/itemtextinput';
import { Type_Of_Signup_Field } from '../../../utils/enum';
import Validation from '../../../utils/validation'
import { showToast } from '../../../utils/toast'
import messageutils from '../../../utils/messageutils';
import Routes from '../../../router/routes';
import StyleConfig from '../../../assets/StyleConfig';


const SignUpScreen = ({ navigation }) => {
    const itemsRef = useRef([]);
    const [tiEmailAddress, setTiEmailAddress] = useState('')
    const [tiPassword, setTiPassword] = useState('')
    const [tiFullName, setTiFullName] = useState('')
    const [inputList, setInputList] = useState(InputConfig.SignUpInput)
    const onSubmitEditing = (index) => {
        const isLast = index !== InputConfig.SignUpInput.length - 1
        if (isLast)
            itemsRef.current[index + 1].focus()
    }

    const onChangeTextHandle = (text, type) => {
        switch (type) {
            case Type_Of_Signup_Field.FullName:
                setTiFullName(text)
                break
            case Type_Of_Signup_Field.EmailAddress:
                setTiEmailAddress(text)
                break
            case Type_Of_Signup_Field.Password:
                setTiPassword(text)
                break
        }
    }

    const getInputValue = (index) => {
        switch (index) {
            case Type_Of_Signup_Field.FullName:
                return tiFullName
            case Type_Of_Signup_Field.EmailAddress:
                return tiEmailAddress
            case Type_Of_Signup_Field.Password:
                return tiPassword
        }
    }
    const handleOnLoginClick = () => {
        navigation.replace(Routes.Login)
    }
    const checkValidationAndSubmit = () => {
        if (!tiFullName.trim().length) {
            showToast(messageutils.Errors.nameBlank)
        }
        else if (!tiEmailAddress.trim().length) {
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
            //TODO CAll Api,remove alert,add navigation code after api call
            // alert('in development')
            navigation.navigate(Routes.ConfirmEmail, { email: tiEmailAddress, isFromUpdate: false})
        }
    }

    const handleOnIconClick = (index) => {
        const inputProps = inputList[index]
        inputProps.SecureTextEntry = !inputProps.SecureTextEntry
        setInputList([...inputList])

    }

    return (
        <SafeAreaView forceInset={{ top: 'never' }} style={styles.saContainer}>
            <ImageBackground style={styles.ibContainer}>
                <AppLogo width={StyleConfig.countPixelRatio(270)} height={StyleConfig.countPixelRatio(100)} />
            </ImageBackground>
            <View style={styles.vContainer}>
                <KeyboardAwareScrollView
                    bounces={false}
                    overScrollMode='never'
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.kavContainer}>
                    <Text style={[CS.textDarkBlueBold, styles.tSignUpNow]}>
                        {string.Signup_Now}
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
                    <Text style={[CS.textLightBlackRegular, styles.tAgreeInfoContainer]}>
                        <Text>
                            {string.By_Signing_Up}
                        </Text>
                        <Text style={[CS.textPrimarySemibold, styles.tSemiBoldText]}>
                            {string.Space}{string.Terms_of_Service}{string.Space}
                        </Text>
                        <Text>
                            {string.And_Sign}{string.Space}
                        </Text>
                        <Text style={[CS.textPrimarySemibold, styles.tSemiBoldText]}>
                            {string.Privacy_Policy}
                        </Text>
                    </Text>
                    <Pressable style={styles.pButtonContainer} onPress={checkValidationAndSubmit}>
                        <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.SignUp}</Text>
                    </Pressable>
                    <View style={styles.vSpaceContainer} />
                    <Text style={[CS.textLightBlackRegular, styles.tLoginInfoContainer]}>
                        <Text>{string.Already_Have_Accout}</Text>
                        <Text style={[CS.textPrimarySemibold, styles.tLogin]} onPress={handleOnLoginClick}>{string.Space}{string.Login}</Text>
                    </Text>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    );
}

export default SignUpScreen;
