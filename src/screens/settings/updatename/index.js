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


const UpdateNameScreen = ({ navigation, route }) => {
    const itemsRef = useRef();
    const [tiName, setTiName] = useState('')

    const { isInEdit, currentName } = route.params

    const handleOnLeftClick = () => {
        navigation.goBack()
    }


    const onChangeTextHandle = (text) => {
        setTiName(text)
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
        if (!tiName.trim().length) {
            showToast(messageutils.Errors.nameBlank)
        }
        else {
            navigation.navigate(Routes.ConfirmNameChange, { name: tiName, currentName: currentName })
        }
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Update_Name}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            {isInEdit ? <Text style={[CS.textLightBlackRegular, styles.tUnderReview]}>{string.Your_Name_Under_Review}</Text> :
                <Text style={[CS.textLightBlackRegular, styles.tUnderReview]}>{string.Your_Name_Under_Review}</Text>}

            <TextInputUI
                isDisabled={isInEdit ? true : false}
                ref={itemsRef}
                inputProps={InputConfig.FullName}
                value={tiName}
                onChangeText={onChangeTextHandle}
            />
            {isInEdit ? <View style={styles.vPendingContainer}>
                <Text style={[CS.textLightBlackRegular, styles.tPendingReview]}>{string.Pending_Approval_Admin}</Text>
            </View> :
                <View style={styles.vNoteContainer}>
                    <Text style={[CS.textLightBlackRegular, styles.tYourName]}>
                        {string.Email_Will_Update}
                    </Text>
                </View>}
            <View style={styles.vSpaceContainer} />
            <Pressable style={styles.pButtonContainer} onPress={handleOnClickButton}>
                {isInEdit ? <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Cancel_Request}</Text> :
                    <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Update_Name}</Text>}
            </Pressable>
        </SafeAreaView>
    );

}
export default UpdateNameScreen;
