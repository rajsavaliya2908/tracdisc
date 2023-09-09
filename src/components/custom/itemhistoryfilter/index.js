import moment from 'moment';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { CancelWhite } from '../../../assets/svgs';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const ItemHistoryFilter = ({ item, index, onCancelClick }) => {
    const handleOnCancelClick = () => {
        onCancelClick(index)
    }
    return (
        <View style={styles.vContainer}>
            {item.isDatePicker ?
                <Text style={[CS.textWhiteSemibold, styles.tTitle]}>
                    {moment(item.startdate).format('DD-MM-YYYY')}
                    {string.Space}
                    {string.To}
                    {string.Space}
                    {moment(item.enddate).format('DD-MM-YYYY')}</Text>
                :
                <Text style={[CS.textWhiteSemibold, styles.tTitle]}>{item.title}</Text>}
            <Pressable style={styles.pContainer} onPress={handleOnCancelClick}>
                <CancelWhite height={StyleConfig.countPixelRatio(12)} width={StyleConfig.countPixelRatio(12)} style={styles.iIcon} />
            </Pressable>
        </View>
    )
}

export default ItemHistoryFilter;
