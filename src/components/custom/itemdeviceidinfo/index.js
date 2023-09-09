import React from 'react';
import { View, Text } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { MobileFill } from '../../../assets/svgs';
import { dummyString } from '../../../utils/dummystring';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const ItemDeviceIdInfo = ({ onClickChange }) => {
    return (
        <View style={styles.vContainer}>
            <MobileFill style={styles.iIcon} width={StyleConfig.countPixelRatio(40)} height={StyleConfig.countPixelRatio(40)} />
            <View style={styles.vDetailContainer}>
                <Text style={[CS.textDarkBlueRegular, styles.tDeviceId]}>{string.DeviceId}</Text>
                <Text style={[CS.textDarkBlueSemibold, styles.tDeviceIdNumber]}>{dummyString.DeviceId}</Text>
            </View>
            <View style={styles.vChangeContainer}>
                <Text style={[CS.textPrimaryRegular,styles.tChange]}>{string.Change}</Text>
            </View>
        </View>
    );
}

export default ItemDeviceIdInfo;
