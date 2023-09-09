import React from 'react';
import { Pressable, Text, View } from 'react-native';
import UserDetailHeader from '../../../components/custom/userdetailheader';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import DialogNfcScanDetail from '../../../components/custom/diaognfcscandetail';
import { useState } from 'react';
import { useEffect } from 'react';
import Method from '../../../utils/method';
import Routes from '../../../router/routes';

const NfcInfoScreeen = ({ navigation }) => {
    const [isScanDetect, setIsScanDetect] = useState(false)
    //TODO:remove this after calling api
    useEffect(() => {
        setTimeout(() => {
            setIsScanDetect(true);
            callScanDetailApi()
        }, 5000)
    }, [])

    const callScanDetailApi = () => {
        setTimeout(() => {
            manageApiResponse()
            setIsScanDetect(false);
        }, 5000)

    }
    const manageApiResponse = () => {
        const selectedValue = Method.randomItemFromArray([0, 1])
        if (selectedValue === 1) {
            manageSuccessResponse()
        }
        else {
            manageUnSuccessResponse()
        }
    }
    const manageUnSuccessResponse = () => {
        navigation.replace(Routes.ScanUnSuccess)

    }
    const manageSuccessResponse = () => {
        navigation.replace(Routes.ScanSuccess)

    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <UserDetailHeader />
            <View style={styles.vMainContainer}>
                <DialogNfcScanDetail isScanDetect={isScanDetect} />
                <View style={styles.vSpaceContainer} />
                <Pressable style={styles.pButtonContainer}>
                    <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Cancel}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default NfcInfoScreeen;
