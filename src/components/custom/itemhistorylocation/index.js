import React from 'react';
import { View, Text } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { Address } from '../../../assets/svgs';
import { dummyString } from '../../../utils/dummystring';
import Method from '../../../utils/method';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const ItemHistoryLocation = () => {
    return (
        <View style={styles.vContainer}>

            <View style={styles.vRowLocationContainer}>
                <Address style={styles.iIcon} width={StyleConfig.countPixelRatio(25)} height={StyleConfig.countPixelRatio(25)} />
                <View style={styles.vDetailContainer}>
                    <Text style={[CS.textLightBlackRegular, styles.tAddress]}>{dummyString.Address}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tDate]}>{Method.formatDoMMMMYYYY(dummyString.date)}</Text>
                    <View style={styles.vLineContainer} />
                    <Text style={[CS.textLightBlackRegular, styles.tDeviceId]}>{string.DeviceId}{string.Colon}{dummyString.DeviceId}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tDeviceId]}>{string.MAC}{string.Colon}{dummyString.MacId}</Text>
                </View>
            </View>

        </View>
    );

}
export default ItemHistoryLocation;
