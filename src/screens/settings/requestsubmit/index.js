import React from 'react';
import { View, Text, Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import StyleConfig from '../../../assets/StyleConfig';
import { CheckMark } from '../../../assets/svgs';
import Routes from '../../../router/routes';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const RequestSubmitScreen = ({ navigation, route }) => {
    const { info,title } = route.params
    const handleReturnToProfile = () => {
        alert('In Development')
    }
    return (
        <SafeAreaView style={styles.saContainer}>
            <View style={styles.vContainer}>
                <View style={styles.vMainContainer}>
                    <CheckMark style={styles.iIcon} width={StyleConfig.countPixelRatio(100)} height={StyleConfig.countPixelRatio(100)} />
                    <Text style={[CS.textLightBlackSemibold, styles.tWeRequest]}>{title}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tInfo]}>{info}</Text>
                </View>
            </View>
            <Pressable style={styles.pButtonContainer} onPress={handleReturnToProfile}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Return_To_Profile}</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default RequestSubmitScreen;
