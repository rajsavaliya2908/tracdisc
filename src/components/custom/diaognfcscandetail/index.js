import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { NFCScanDetail } from '../../../assets/svgs';
import color from '../../../utils/color';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const DialogNfcScanDetail = ({ isScanDetect }) => {
    const NFCInfo = () => {
        return (
            <View>
                <NFCScanDetail
                    style={styles.iIcon} />
                <Text style={[CS.textLightBlackRegular, styles.tPlacePhone]}>{string.Place_Your_Phone}</Text>
            </View>
        )
    }
    const ValidatingScan = () => {
        return (
            <View>
                <Text style={[CS.textPrimarySemibold, styles.tTitle]}>{string.Validating_Scan}</Text>
                <ActivityIndicator size='large' color={color.primarycolor} style={styles.aiContainer} />
                <Text style={[CS.textLightBlackRegular, styles.tPleaseWait]}>{string.Please_Wait}</Text>
                <Text style={[CS.textLightBlackRegular, styles.tCanTake]}>{string.This_Can_Take}</Text>
            </View>)
    }
    return (
        <View style={styles.vContainer}>
            {isScanDetect ? <ValidatingScan /> : <NFCInfo />}
        </View>
    );
}

export default DialogNfcScanDetail;
