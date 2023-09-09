import React from 'react';
import { View, Text } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { LocationDashboard } from '../../../assets/svgs';
import { dummyString } from '../../../utils/dummystring';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles';


const ItemCoordinateInfo = ({ onClickSetCoordinate }) => {
    return (
        <View style={styles.vContainer}>
            <LocationDashboard style={styles.iIcon} width={StyleConfig.countPixelRatio(40)} height={StyleConfig.countPixelRatio(40)} />
            <View style={styles.vDetailContainer}>
                <Text style={[CS.textDarkBlueRegular, styles.tSetCoordinate]}>{string.Set_Coordinate}</Text>
                <Text style={[CS.textDarkBlueSemibold, styles.tCoordinate]}>{dummyString.Lat}{string.Comma}{dummyString.Long}</Text>
                <Text style={[CS.textDarkBlueRegular, styles.tLocation]}>{dummyString.Address}</Text>
                <Text style={[CS.textPrimaryRegular, styles.tNewCoordinate]} onPress={onClickSetCoordinate}>{string.Set_New_Coordinate}</Text>
            </View>
        </View>

    );
}

export default ItemCoordinateInfo;
