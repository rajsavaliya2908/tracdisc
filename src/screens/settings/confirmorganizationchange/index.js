import React, { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import StyleConfig from '../../../assets/StyleConfig';
import { ForwardChange } from '../../../assets/svgs';
import CommonToolbar from '../../../components/custom/commontoolbar';
import Routes from '../../../router/routes';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'
const ConfirmOrganizationChangeScreen = ({ navigation, route }) => {
    const { currentCode, newCode } = route.params
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const handleOnClickButton = () => {
        navigation.navigate(Routes.NewCodeSubmit)
    }
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
            <View style={styles.vMainCodeInfoContainer}>
                <Text style={[CS.textLightBlackRegular, styles.tTitleInfo]}>{string.You_Changing_Organisation_ID}</Text>
                <View style={styles.vCodeInfoContainer}>
                    <View style={styles.vCodeContainer}>
                        <Text style={[CS.textLightBlackRegular, styles.tTitle]}>{string.From}</Text>
                        <Text style={[CS.textLightBlackSemibold, styles.tDetail]}>{currentCode}</Text>
                    </View>
                    <ForwardChange height={StyleConfig.countPixelRatio(20)} width={StyleConfig.countPixelRatio(20)} />
                    <View style={styles.vCodeContainer}>
                        <Text style={[CS.textLightBlackRegular, styles.tTitle]}>{string.To}</Text>
                        <Text style={[CS.textLightBlackSemibold, styles.tDetail, styles.tPrimaryColor]}>{newCode}</Text>
                    </View>
                </View>
            </View>
            <Text style={[CS.textLightBlackRegular, styles.tInviteInfo]}>{string.Confirm_Whether_You_Wish}</Text>
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

export default ConfirmOrganizationChangeScreen;
