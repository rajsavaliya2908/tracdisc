import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import StyleConfig from '../../../assets/StyleConfig';
import { ScanunSuccess } from '../../../assets/svgs';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import color from '../../../utils/color';
import { useEffect } from 'react';
import Method from '../../../utils/method';
import Routes from '../../../router/routes';


const ScanAgainInfoScreen = ({ navigation }) => {
    const MAX_POINTS = 25;
    const [isButtonEnable, setIsButtonEnable] = useState(false)
    const [time, setTime] = useState('')
    useEffect(() => {
        var time = 0
        setInterval(() => {
            if (time < MAX_POINTS) {
                time++
                setTime(time)
            }
            else {
                setIsButtonEnable(true)
            }

        }, 1000)
    }, [])


    const handleOnOkayClick = () => {
        Method.startWithReset(navigation, Routes.Dashboard)
    }
    return (
        <SafeAreaView style={styles.saContainer}>
            <View style={styles.vContainer}>
                <View style={styles.vMainContainer}>
                    <ScanunSuccess style={styles.iIcon} width={StyleConfig.countPixelRatio(100)} height={StyleConfig.countPixelRatio(100)} />
                    <Text style={[CS.textLightBlackSemibold, styles.tUnSuccess]}>{string.Your_Last_Scan_Was_UnSuccess}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tInfo]}>{string.Please_Try_Again}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tInfo]}>{string.Facing_Simmilar_Issue}</Text>

                    <AnimatedCircularProgress
                        size={StyleConfig.countPixelRatio(120)}
                        rotation={0}
                        duration={300}
                        width={StyleConfig.countPixelRatio(8)}
                        backgroundWidth={StyleConfig.countPixelRatio(8)}
                        fill={(time / MAX_POINTS) * 100}
                        style={styles.acContainer}
                        tintColor={color.light_warning}
                        backgroundColor={color.primarycolor}>
                        {() => <Text style={[CS.textPrimaryBold, styles.tTime]}>{MAX_POINTS - time}</Text>}
                    </AnimatedCircularProgress>


                </View>
            </View>
            <Pressable
                disabled={!isButtonEnable}
                style={[styles.pButtonContainer, !isButtonEnable && styles.disableButtonColor]} onPress={handleOnOkayClick}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Okay}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ScanAgainInfoScreen;
