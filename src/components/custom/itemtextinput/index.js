import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';
import CS from '../../../utils/styles';
import PasswordStrengthMeterBar from '../../library/passwordstrengthmeterbar';
import styles from './styles'

const ItemTextInput = ({ inputProps, isDisabled, index, onChangeText, onSubmitEditing, onRightIconClick }, ref) => {
    const [password, setPassword] = useState('')

    const handleOnChangeText = (text) => {
        if (inputProps.isStrengthCheck) {
            setPassword(text)
        }
        onChangeText(text, inputProps.Type)


    }
    const handleOnSubmitEditing = () => {
        if (index !== undefined)
            onSubmitEditing(index)
    }
    return (
        <View style={styles.vMainContainer}>
            {inputProps.Label && <Text style={[CS.textLightBlackRegular, styles.tLabel]}>{inputProps.Label}</Text>}
            <View style={[styles.vInputContainer, , isDisabled && styles.tiDisableColor]}>
                <inputProps.LeftIcon width={StyleConfig.countPixelRatio(22)} height={StyleConfig.countPixelRatio(22)} style={styles.leftIcon} />
                <TextInput
                    editable={!isDisabled}
                    ref={ref}
                    placeholderTextColor={color.dark_grey}
                    placeholder={inputProps.PlaceHolder}
                    onChangeText={handleOnChangeText}
                    maxLength={inputProps.Length ? inputProps.Length : null}
                    autoCapitalize={inputProps.AutoCapitalize}
                    secureTextEntry={inputProps.SecureTextEntry ? true : false}
                    onSubmitEditing={handleOnSubmitEditing}
                    keyboardType={inputProps.KeyboardType}
                    returnKeyType={inputProps.ReturnKeyType}
                    style={styles.tiContainer}

                />
                {inputProps.RightIcon && <Pressable onPress={onRightIconClick}><inputProps.RightIcon width={StyleConfig.countPixelRatio(22)} height={StyleConfig.countPixelRatio(22)} style={styles.rightIcon} /></Pressable>}
            </View>
            {inputProps.isStrengthCheck && <PasswordStrengthMeterBar password={password} />}
        </View>
    );
}

const TextInputUI = React.forwardRef(ItemTextInput);

export default TextInputUI
