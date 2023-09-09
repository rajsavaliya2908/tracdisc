import React, { useState, useRef } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import StyleConfig from '../../../assets/StyleConfig';
import { OfficePrimary } from '../../../assets/svgs';
import CommonToolbar from '../../../components/custom/commontoolbar';
import TextInputUI from '../../../components/custom/itemtextinput';
import Routes from '../../../router/routes';
import InputConfig from '../../../utils/inputconfig';
import messageutils from '../../../utils/messageutils';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import { showToast } from '../../../utils/toast';
import styles from './styles';

const InviteCodeScreen = ({ navigation }) => {
    const itemsRef = useRef();
    const [tiInviteCode, setTiInviteCode] = useState('')

    const onChangeTextHandle = (text) => {
        setTiInviteCode(text)
    }
    const handleOnLeftClick = () => {
        navigation.goBack()
    }



    const checkValidationAndSubmit = () => {
        if (!tiInviteCode.trim().length) {
            showToast(messageutils.Errors.inviteCodeBlank)
        }
        else if (tiInviteCode.trim().length < 6) {
            showToast(messageutils.Errors.inviteCodeValid)
        }
        else {
            //TODO remove navigation code and add after api calling
            navigation.navigate(Routes.ApproveAccount, { IsFromLogin: false })
        }
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            <OfficePrimary width={StyleConfig.countPixelRatio(70)} height={StyleConfig.countPixelRatio(70)} style={styles.iOfficePrimary} />
            <Text style={[CS.textBlackBold, styles.tFinalStep]}>{string.Final_Step}</Text>
            <Text style={[CS.textLightBlackRegular, styles.tInviteCode]}>{string.Enter_Invite_Code}</Text>
            <View style={styles.vInputContainer}>
                <TextInputUI
                    ref={itemsRef}
                    inputProps={InputConfig.InviteCode}
                    value={tiInviteCode}
                    onChangeText={onChangeTextHandle}
                />
            </View>
            <Text style={[CS.textLightBlackRegular, styles.tInfo]}>
                {string.InviteCode_Info1}
            </Text>
            <Text style={[CS.textLightBlackRegular, styles.tInfo]}>
                {string.InviteCode_Info2}
            </Text>
            <Text style={[CS.textLightBlackRegular, styles.tInfo]}>
                {string.InviteCode_Info3}
            </Text>
            <View style={styles.vSpaceContainer} />
            <Pressable style={styles.pButtonContainer} onPress={checkValidationAndSubmit}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Submit}</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default InviteCodeScreen;
