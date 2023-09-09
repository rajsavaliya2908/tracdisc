import React, { useRef, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import CommonToolbar from '../../../components/custom/commontoolbar';
import { string } from '../../../utils/string';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import TextInputUI from '../../../components/custom/itemtextinput';
import InputConfig from '../../../utils/inputconfig';
import CS from '../../../utils/styles';
import Validation from '../../../utils/validation';
import messageutils from '../../../utils/messageutils';
import { showToast } from '../../../utils/toast';
import Routes from '../../../router/routes';


const UpdateEmailScreen = ({ navigation, route }) => {
    const itemsRef = useRef();
    const [tiEmail, setTiEmail] = useState('')

    const { isInEdit } = route.params

    const handleOnLeftClick = () => {
        navigation.goBack()
    }


    const onChangeTextHandle = (text) => {
        setTiEmail(text)
    }
    const handleOnClickButton = () => {
        if (isInEdit) {
            alert('In Development')
        }
        else {
            validateAndCallApi()
        }
    }
    const validateAndCallApi = () => {
        if (!tiEmail.trim().length) {
            showToast(messageutils.Errors.emailBlank)
        }
        else if (Validation.isEmailInvalid(tiEmail)) {
            showToast(messageutils.Errors.emailValidity)
        }
        else {
            navigation.navigate(Routes.ConfirmEmail, { email: tiEmail, isFromUpdate: true })
        }
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Update_Email}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            {isInEdit ? <Text style={[CS.textLightBlackRegular, styles.tUnderReview]}>{string.Your_Email_Under_Review}</Text> :
                <Text style={[CS.textLightBlackRegular, styles.tUnderReview]}>{string.Your_Email_Address_Update}</Text>}

            <TextInputUI
                isDisabled={isInEdit ? true : false}
                ref={itemsRef}
                inputProps={InputConfig.Email}
                value={tiEmail}
                onChangeText={onChangeTextHandle}
            />
            {isInEdit ? <View style={styles.vPendingContainer}>
                <Text style={[CS.textLightBlackRegular, styles.tPendingReview]}>{string.Pending_Approval_Admin}</Text>
            </View> :
                <View style={styles.vNoteContainer}>
                    <Text style={[CS.textLightBlackRegular, styles.tNoteContainer]}>
                        <Text style={[CS.textLightBlackSemibold, styles.tNote]}>{string.Note}{string.Colon}{string.Space}</Text>
                        <Text style={[CS.textLightBlackRegular, styles.tVerificationCode]}>{string.Verification_Code_To_New_Email}</Text>
                    </Text>
                    <Text style={[CS.textLightBlackRegular, styles.tYourEmail]}>
                        {string.Email_Will_Update}
                    </Text>
                </View>}
            <View style={styles.vSpaceContainer} />
            <Pressable style={styles.pButtonContainer} onPress={handleOnClickButton}>
                {isInEdit ? <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Cancel_Request}</Text> :
                    <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Continue}</Text>}
            </Pressable>
        </SafeAreaView>
    );

}
export default UpdateEmailScreen;
