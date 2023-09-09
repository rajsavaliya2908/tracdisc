import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';
import AppImages from '../../../assets/pngs';
import CommonToolbar from '../../../components/custom/commontoolbar'
import { string } from '../../../utils/string';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import CS from '../../../utils/styles';
import Method from '../../../utils/method';
import DialogNfcScanDetail from '../../../components/custom/diaognfcscandetail';
import Routes from '../../../router/routes';

const ScanAfterAddIdScreen = ({ navigation, route }) => {
    const { deviceId } = route.params

    const [isScanDetect, setIsScanDetect] = useState(false)

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
        navigation.navigate(Routes.ScanUnSuccess)

    }
    const manageSuccessResponse = () => {
        navigation.navigate(Routes.AddLocationName, { isScanEnable: false })

    }
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    return (<SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
        <CommonToolbar
            isLeftButton
            title={string.Step2}
            leftIcon={
                <Image style={styles.iBackIcon}
                    source={AppImages.ic_black_back} />
            }
            onLeftClickListener={handleOnLeftClick}
        />
        <Text style={[CS.textLightBlackBold, styles.tScanDevice]}>{string.Scan_The_Device}</Text>
        <Text style={[CS.textLightBlackRegular, styles.tPlaceYourPhone]}>{string.Place_Your_Phone_Near}</Text>
        <Text style={styles.tDeviceCodeCotainer}>
            <Text style={[CS.textLightBlackRegular, styles.tYouAreAbout]}>{string.You_Are_About_To_Set}</Text>
            <Text style={[CS.textLightBlackSemibold, styles.tDeviceCode]}>{string.Space}{Method.getDeviceIdFromArray(deviceId)}</Text>
        </Text>
        <DialogNfcScanDetail isScanDetect={isScanDetect} />

    </SafeAreaView>)
}
export default ScanAfterAddIdScreen;
