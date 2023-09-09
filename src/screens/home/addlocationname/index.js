import React, { useState, useEffect } from 'react';
import { Image, View, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import StyleConfig from '../../../assets/StyleConfig';
import styles from './styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import mapstyle from '../../../utils/mapstyle.json';
import ItemNameLocation from '../../../components/custom/itemnamelocation';
import AppImages from '../../../assets/pngs';
import CommonToolbar from '../../../components/custom/commontoolbar';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import DialogNfcScanDetail from '../../../components/custom/diaognfcscandetail';
import Method from '../../../utils/method';
import Routes from '../../../router/routes';


const AddLocationNameScreen = ({ navigation, route }) => {
    const { isScanEnable } = route.params
    const LATITUDE = 51.518425;
    const LONGITUDE = -0.145070;
    const LATITUDE_DELTA = 0.025;

    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: (StyleConfig.width / StyleConfig.height) * LATITUDE_DELTA,
    })

    const [isScanDetect, setIsScanDetect] = useState(false)
    const [isMapShow, setIsMapShow] = useState(false)

    useEffect(() => {
        setIsMapShow(!isScanEnable)
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
        setIsMapShow(true)
    }

    const handleOnLeftClick = () => {
        navigation.goBack()
    }

    const handleOnContinueClick = () => {
        navigation.navigate(Routes.ConfirmCoordinate)
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never', bottom: 'always' }}>
            <CommonToolbar
                isLeftButton
                title={string.Step3}
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />

            {isMapShow ? <>
                <MapView
                    cacheEnabled
                    zoomEnabled={true}
                    customMapStyle={mapstyle}
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapview}
                    initialRegion={region}
                    region={region}>

                    <Marker
                        title={'dsdsdsd'}
                        coordinate={region}
                        image={AppImages.ic_marker}
                    />
                </MapView>
                <ItemNameLocation onContinueClick={handleOnContinueClick} />
            </> :
                <View style={styles.vScanContainer}>
                    <Text style={[CS.textLightBlackBold, styles.tScanDevice]}>{string.Scan_The_Device}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tPlaceYourPhone]}>{string.Place_Your_Phone_Near}</Text>
                    <DialogNfcScanDetail isScanDetect={isScanDetect} />
                </View>}
        </SafeAreaView>
    );
}

export default AddLocationNameScreen;
