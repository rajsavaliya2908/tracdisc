import React, { useState } from 'react';
import { Image, View, Pressable, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import StyleConfig from '../../../assets/StyleConfig';
import { CheckMark } from '../../../assets/svgs';

import CommonToolbar from '../../../components/custom/commontoolbar';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';

import styles from './styles'
const NewCodeSubmitScreen = ({ navigation }) => {
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const handleClickOnButton = () => {
        alert('In Development')
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

            <View style={styles.vMainContainer}>
                <CheckMark style={styles.iIcon} width={StyleConfig.countPixelRatio(100)} height={StyleConfig.countPixelRatio(100)} />
                <Text style={[CS.textLightBlackSemibold, styles.tThankYou]}>{string.Thank_You}</Text>
                <Text style={[CS.textLightBlackRegular, styles.tInfo]}>{string.New_Organisation_Sent}</Text>
                <Text style={[CS.textLightBlackRegular, styles.tOnceApprove]}>{string.Once_Approved_Able_Login}</Text>
                <View style={styles.vPendingContainer}>
                    <Text style={[CS.textLightBlackRegular, styles.tPendingApproval]}>{string.Pending_Approval}</Text>
                </View>

            </View>
            <Pressable style={styles.pButtonContainer} onPress={handleClickOnButton}>
                <Text style={[CS.textWhiteBold, styles.tButton]}>{string.Go_Back_To_Login}</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default NewCodeSubmitScreen;
