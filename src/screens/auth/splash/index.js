import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SplashLogo } from '../../../assets/svgs';
import { string } from '../../../utils/string';
import styles from './styles'
import CS from '../../../utils/styles'
import SafeAreaView from 'react-native-safe-area-view'
import { dummyString } from '../../../utils/dummystring';
import Routes from '../../../router/routes';
import StyleConfig from '../../../assets/StyleConfig';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace(Routes.SignUp)
        }, 2000)
    }, [])
    return (
        <SafeAreaView style={styles.saContainer}>
            <View style={styles.vContainer}>
                <SplashLogo width={StyleConfig.countPixelRatio(220)} height={StyleConfig.countPixelRatio(220)} />
            </View>
            <Text style={[CS.textDarkBlueRegular, styles.tVersion]}>
                <Text>{string.App_Version}{dummyString.App_Version}</Text>
            </Text>
        </SafeAreaView>
    );

}
export default SplashScreen;
