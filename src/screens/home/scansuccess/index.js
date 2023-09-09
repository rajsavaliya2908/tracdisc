import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { CircleTick } from '../../../assets/svgs';
import Routes from '../../../router/routes';
import Method from '../../../utils/method';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const ScanSuccessScreen = ({ navigation }) => {
    const handleOnOkayClick = () => {
        Method.startWithReset(navigation, Routes.Dashboard)
    }
    return (
        <SafeAreaView style={styles.saContainer}>
            <View style={styles.vContainer}>
                <View style={styles.vMainContainer}>
                    <CircleTick style={styles.iIcon} width={StyleConfig.countPixelRatio(100)} height={StyleConfig.countPixelRatio(100)} />
                    <Text style={[CS.textLightBlackSemibold, styles.tSuccess]}>{string.Your_Scan_Was_Success}</Text>
                </View>
            </View>
            <Pressable style={styles.pButtonContainer} onPress={handleOnOkayClick}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Okay}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ScanSuccessScreen;
