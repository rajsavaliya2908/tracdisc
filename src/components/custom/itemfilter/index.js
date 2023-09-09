import moment from 'moment';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { Calendar, Checked } from '../../../assets/svgs';
import { Type_Of_Date, Type_Of_Tab } from '../../../utils/enum';
import CS from '../../../utils/styles';
import styles from './styles'

const ItemFilter = ({ item, index, onFilterClick, onDateClick }) => {

    const handleOnFilterClick = () => {
        onFilterClick(index)
    }

    const handleOnDateClick = (type) => {
        onDateClick(index, type)
    }
    return (
        <Pressable style={styles.vMainContainer} onPress={handleOnFilterClick}>
            <View style={styles.vInfoRowContainer}>
                <Text style={[CS.textBlackSemibold, styles.tTitle]}>{item.title}</Text>
                <View style={[styles.vCheckContainer, item.isChecked && styles.vSelectedColor]}>
                    {item.isChecked && <Checked width={StyleConfig.countPixelRatio(15)} height={StyleConfig.countPixelRatio(15)} />}
                </View>
            </View>
            {(item.isDatePicker && item.isChecked) && <View style={styles.vDateContainer}>
                <Pressable style={styles.pDateContainer} onPress={() => { handleOnDateClick(Type_Of_Date.StartDate) }}>
                    <Text style={[CS.textBlackRegular, styles.tDate]}>
                        {item.startdate ? moment(item.startdate).format('DD-MM-YYYY') : moment().format('DD-MM-YYYY')}
                    </Text>
                    <Calendar style={styles.iIcon} />
                </Pressable>
                <Pressable style={styles.pDateContainer} onPress={() => { handleOnDateClick(Type_Of_Date.EndDate) }}>
                    <Text style={[CS.textBlackRegular, styles.tDate]}>
                        {item.enddate ? moment(item.enddate).format('DD-MM-YYYY') : moment().format('DD-MM-YYYY')}
                    </Text>
                    <Calendar style={styles.iIcon} />
                </Pressable>
            </View>}



        </Pressable>
    );
}

export default ItemFilter;
