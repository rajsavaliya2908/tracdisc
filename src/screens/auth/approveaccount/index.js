import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import StyleConfig from '../../../assets/StyleConfig';
import { CircleTick, Welcome } from '../../../assets/svgs';
import CommonToolbar from '../../../components/custom/commontoolbar';
import Routes from '../../../router/routes';
import Method from '../../../utils/method';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const ApproveAccountScreen = ({ navigation, route }) => {
    const { IsFromLogin } = route.params
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const handleOnClickButton = () => {
        Method.startWithReset(navigation, Routes.Login)
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
            {IsFromLogin ? <Welcome style={styles.ctContainer} width={StyleConfig.countPixelRatio(100)} height={StyleConfig.countPixelRatio(100)} /> :
                <CircleTick style={styles.ctContainer} width={StyleConfig.countPixelRatio(100)} height={StyleConfig.countPixelRatio(100)} />}
            <Text style={[CS.textBlackBold, styles.tThankYou]}>{IsFromLogin ? string.Welcome : string.Thank_You}</Text>
            <Text style={[CS.textLightBlackRegular, styles.tInfo]}>{string.Registration_Is_Pending}</Text>
            <Text style={[CS.textLightBlackRegular, styles.tInfo]}>{string.Once_Approved_Able_Login}</Text>
            <View style={styles.vStatusCotainer}>
                <Text style={[CS.textBlackRegular, styles.tStatus]}>{string.Pending_Approval}</Text>
            </View>
            <View style={styles.vSpaceCotainer} />
            <Pressable style={styles.pButtonContainer} onPress={handleOnClickButton}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Go_Back_To_Login}</Text>
            </Pressable>
        </SafeAreaView>
    );

}
export default ApproveAccountScreen;
