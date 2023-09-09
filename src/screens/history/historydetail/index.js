import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import mapstyle from '../../../utils/mapstyle.json';
import StyleConfig from '../../../assets/StyleConfig';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import ItemHistoryLocation from '../../../components/custom/itemhistorylocation';
import { Cancel } from '../../../assets/svgs';
import { Pressable } from 'react-native';


const HistoryDetailScreen = ({ navigation }) => {
    const LATITUDE = 21.170786;
    const LONGITUDE = 72.831644;
    const LATITUDE_DELTA = 0.025;
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: (StyleConfig.width / StyleConfig.height) * LATITUDE_DELTA,
    })
    const handleOnCancelClick = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never', bottom: 'never' }}>

            <MapView
                cacheEnabled
                zoomEnabled={true}
                customMapStyle={mapstyle}
                provider={PROVIDER_GOOGLE}
                style={styles.mapview}
                initialRegion={region}
                region={region} >
                <Marker
                    title={'dsdsdsd'}
                    coordinate={region}
                    image={AppImages.ic_marker}
                />
            </MapView>
            <Pressable style={styles.pContainer} onPress={handleOnCancelClick}>
                <Cancel height={StyleConfig.countPixelRatio(22)} width={StyleConfig.countPixelRatio(22)} />
            </Pressable>
            <ItemHistoryLocation />
        </SafeAreaView>
    );
}

export default HistoryDetailScreen;
