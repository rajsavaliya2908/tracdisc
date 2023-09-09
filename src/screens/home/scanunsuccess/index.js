import React from 'react';
import { View, Text, Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import StyleConfig from '../../../assets/StyleConfig';
import { ScanunSuccess } from '../../../assets/svgs';
import Routes from '../../../router/routes';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const ScanUnSuccessScreen = ({ navigation }) => {
    const handleOnRetryClick = () => {
        navigation.navigate(Routes.ScanAgainInfo)
    }
    return (
        <SafeAreaView style={styles.saContainer}>
            <View style={styles.vContainer}>
                <View style={styles.vMainContainer}>
                    <ScanunSuccess style={styles.iIcon} width={StyleConfig.countPixelRatio(100)} height={StyleConfig.countPixelRatio(100)} />
                    <Text style={[CS.textLightBlackSemibold, styles.tUnSuccess]}>{string.Your_Scan_Was_UnSuccess}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tInfo]}>{string.Please_Retry_Action}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tInfo]}>{string.Facing_Simmilar_Issue}</Text>
                </View>
            </View>
            <Pressable style={styles.pButtonContainer} onPress={handleOnRetryClick}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Retry}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ScanUnSuccessScreen;
