import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { CircleTick, ScanunSuccess } from '../../../assets/svgs';
import Routes from '../../../router/routes';
import Method from '../../../utils/method';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const DeviceIdUnSuccessScreen = ({ navigation }) => {
    const handleOnReturnClick = () => {
        Method.startWithReset(navigation, Routes.Dashboard)
    }
    return (
        <SafeAreaView style={styles.saContainer}>
            <View style={styles.vContainer}>
                <View style={styles.vMainContainer}>
                    <ScanunSuccess style={styles.iIcon} width={StyleConfig.countPixelRatio(100)} height={StyleConfig.countPixelRatio(100)} />
                    <Text style={[CS.textLightBlackSemibold, styles.tUnSuccess]}>{string.Unsuccessful}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tDeviceNotFound]}>{string.Device_ID_Not_Found}</Text>
                </View>
            </View>
            <Pressable style={styles.pButtonContainer} onPress={handleOnReturnClick}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Return}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default DeviceIdUnSuccessScreen;

