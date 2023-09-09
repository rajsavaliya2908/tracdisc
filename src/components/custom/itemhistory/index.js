import React from 'react';
import { Pressable, Text, View } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { Address, Mobile } from '../../../assets/svgs';
import { Type_Of_Location } from '../../../utils/enum';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'
import Method from '../../../utils/method'

const ItemHistory = ({ item, index, onClickHistoryItem }) => {

    // const isDeviceId = item.type === Type_Of_Location.DeviceId
    const isLocation = item.type === Type_Of_Location.Location

    const handleOnHistoryClick = () => {
        onClickHistoryItem(index)
    }
    return (
        <Pressable style={styles.pContainer} onPress={handleOnHistoryClick}>
            {isLocation ? <Mobile style={styles.iIcon} width={StyleConfig.countPixelRatio(25)} height={StyleConfig.countPixelRatio(28)} /> :
                <Address width={StyleConfig.countPixelRatio(25)} height={StyleConfig.countPixelRatio(25)} style={styles.iIcon} />}
            <View style={styles.vDetailContainer}>
                {isLocation ? <Text style={[CS.textLightBlackRegular, styles.tLocation]}>{item.location}</Text> :
                    <Text style={[CS.textLightBlackRegular, styles.tLocation]}>{string.DeviceId}{string.Colon}{item.deviceid}</Text>}
                <Text style={[CS.textLightBlackRegular, styles.tTime]}>{Method.convertToDOMMYYYYHHSS(item.time)}</Text>
                {isLocation ? <View style={styles.vLocationTypeContainer}>
                    <Text style={[CS.textLightBlackRegular, styles.tLocationTypeInfo]}>
                        {string.DeviceId}{string.Colon}{string.Space}{item.deviceid}
                    </Text>
                    <Text style={[CS.textLightBlackRegular, styles.tLocationTypeInfo]}>
                        {string.MAC}{string.Colon}{string.Space}{item.macid}
                    </Text>
                </View> :
                    <Text style={[CS.textLightBlackRegular, styles.tLocationTypeInfo]}>{string.Set_New_Coordinate}
                        {string.Colon}
                        {string.Space}
                        {item.coordinates.lat}
                        {string.Comma}
                        {item.coordinates.long}</Text>}
            </View>
        </Pressable>
    );
}

export default ItemHistory;
