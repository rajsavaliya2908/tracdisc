import React, { useState, useRef } from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import CommonToolbar from '../../../components/custom/commontoolbar';
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import styles from './styles'
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import InputConfig from '../../../utils/inputconfig';
import TextInputUI from '../../../components/custom/itemtextinput';
import { Type_Of_ChangePassword_Field } from '../../../utils/enum';
import { showToast } from '../../../utils/toast';
import messageutils from '../../../utils/messageutils';
import Routes from '../../../router/routes';

const ChangePasswordScreen = ({ navigation }) => {
    const itemsRef = useRef([])
    const [inputList, setInputList] = useState(InputConfig.ChangePassword)
    const [tiOldPassword, setTiOldPassword] = useState('')
    const [tiPassword, setTiPassword] = useState('')
    const [tiConfirmPassword, setTiConfirmPassword] = useState('')


    const handleOnLeftClick = () => {
        navigation.goBack()
    }

    const onSubmitEditing = (index) => {
        const isLast = index !== InputConfig.ChangePassword.length - 1
        if (isLast) itemsRef.current[index + 1].focus()
    }


    const getInputValue = (index) => {
        switch (index) {
            case Type_Of_ChangePassword_Field.tiOldPassword:
                return tiOldPassword
            case Type_Of_ChangePassword_Field.NewPassword:
                return tiPassword
            case Type_Of_ChangePassword_Field.ConfirmNewPassword:
                return tiConfirmPassword


        }
    }
    const handleOnIconClick = (index) => {
        const inputProps = inputList[index]
        inputProps.SecureTextEntry = !inputProps.SecureTextEntry
        setInputList([...inputList])
    }
    const onChangeTextHandle = (text, type) => {
        switch (type) {
            case Type_Of_ChangePassword_Field.OldPassword:
                setTiOldPassword(text)
                break
            case Type_Of_ChangePassword_Field.NewPassword:
                setTiPassword(text)
                break
            case Type_Of_ChangePassword_Field.ConfirmNewPassword:
                setTiConfirmPassword(text)
                break

        }
    }

    const checkValidationAndSubmit = () => {
        if (!tiOldPassword.trim().length) {
            showToast(messageutils.Errors.pwdOldBlank)
        }
        else if (!tiPassword.trim().length) {
            showToast(messageutils.Errors.pwdBlank)
        }
        else if (tiPassword.trim().length < 8 || tiPassword.trim().length > 20) {
            showToast(messageutils.Errors.pwdInvalid)
        }
        else if (tiPassword.trim() !== tiConfirmPassword.trim()) {
            showToast(messageutils.Errors.pwdMisMatch)
        }
        else {
            //TODO:remove navigation code and put after api call
            navigation.navigate(Routes.ResetSuccess)
        }
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Change_Password}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />

            <Text style={[CS.textLightBlackRegular, styles.tPasswordInfo]}>{string.Change_Password_Info}</Text>
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
            <View style={styles.vSpaceContainer} />
            <Pressable style={styles.pButtonContainer} onPress={checkValidationAndSubmit}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Submit}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ChangePasswordScreen;
