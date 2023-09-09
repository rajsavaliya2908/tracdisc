import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import CommonToolbar from '../../../components/custom/commontoolbar';
import ItemEditProfile from '../../../components/custom/itemeditprofile';
import TextInputUI from '../../../components/custom/itemtextinput';
import Routes from '../../../router/routes';
import InputConfig from '../../../utils/inputconfig';
import messageutils from '../../../utils/messageutils';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import { showToast } from '../../../utils/toast';
import styles from './styles'

const UpdaterOganizationScreen = ({ navigation, route }) => {
    const { organizationInfo } = route.params
    const [tiInviteCode, setTiInviteCode] = useState('')
    const itemsRef = useRef('')
    console.log(organizationInfo    )
    const handleOnLeftClick = () => {
        navigation.goBack()
    }

    const onChangeTextHandle = (text) => {
        setTiInviteCode(text)
    }
    const handleOnClickButton = () => {
        if (!tiInviteCode.trim().length) {
            showToast(messageutils.Errors.inviteCodeBlank)
        }
        else if (tiInviteCode.trim().length < 6) {
            showToast(messageutils.Errors.inviteCodeValid)
        }
        else {
            navigation.navigate(Routes.ConfirmOrganizationChange, { currentCode: organizationInfo.value, newCode: tiInviteCode })
        }
    }

    useEffect(() => {

    }, [])
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Update_Organization}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            <Text style={[CS.textLightBlackRegular, styles.tRequirement]}>{string.Any_Changes_Organization_Require_Approve}</Text>
            <ItemEditProfile item={organizationInfo} removeForwarIcon />
            <View style={styles.vInputContainer}>
                <TextInputUI
                    ref={itemsRef}
                    inputProps={InputConfig.InviteCodeWithLabel}
                    value={tiInviteCode}
                    onChangeText={onChangeTextHandle}
                />
            </View>
            <Text style={[CS.textLightBlackRegular, styles.tInviteInfo]}>{string.Case_Sensitive_Info}</Text>
            <View style={styles.vWarningContainer}>
                <Text style={[CS.textLightBlackRegular, styles.tWarningContainer]}>
                    <Text style={[CS.textLightBlackSemibold, styles.tWarning]}>{string.Warning}{string.Colon}{string.Space}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tWarningDetail]}>{string.Warninng_Invite_Code}</Text>
                </Text>
            </View>
            <View style={styles.vSpaceContainer} />
            <Pressable style={styles.pButtonContainer} onPress={handleOnClickButton}>
                <Text style={[CS.textWhiteBold, styles.tButton]}>{string.Continue}</Text>
            </Pressable>
        </SafeAreaView>
    );

}
export default UpdaterOganizationScreen;
