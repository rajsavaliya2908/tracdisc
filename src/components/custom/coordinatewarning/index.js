import React from 'react';
import { View, Text } from 'react-native';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const CoordinateWarning = () => {
    return (
        <View style={styles.vWarningContainer}>
            <Text style={[CS.textLightBlackRegular, styles.tCoordinate]} >
                {string.Do_You_Want_To_Set}
            </Text>
            <Text style={styles.tWarningContainer}>
                <Text style={[CS.textLightBlackSemibold, styles.tWarning]}>
                    {string.Warning}{string.Colon}{string.Space}
                </Text>
                <Text style={[CS.textLightBlackRegular, styles.tWarningInfo]}>
                    {string.This_Process_Can_Undone}
                </Text>
            </Text>
        </View>
    );
}

export default CoordinateWarning;
