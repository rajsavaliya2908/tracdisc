import React from 'react';
import { View, Pressable, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import StyleConfig from '../../../assets/StyleConfig';
import { CircleTick } from '../../../assets/svgs';
import Routes from '../../../router/routes';
import Method from '../../../utils/method';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const ResetSuccessScreen = ({ navigation }) => {
    const handleOnClickButton = () => {
        Method.startWithReset(navigation, Routes.Login)
    }
    return (
        <SafeAreaView style={styles.saContainer}>
            <View style={styles.vMainContainer}>
                <CircleTick style={styles.iIcon} width={StyleConfig.countPixelRatio(100)} height={StyleConfig.countPixelRatio(100)} />
                <Text style={[CS.textBlackBold, styles.tSuccess]}>{string.Success}</Text>
                <Text style={[CS.textLightBlackRegular, styles.tPasswordReset]}>{string.Password_Reset_Successfully}</Text>
            </View>
            <Pressable style={styles.pButtonContainer} onPress={handleOnClickButton}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Return_To_Login}</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default ResetSuccessScreen;
