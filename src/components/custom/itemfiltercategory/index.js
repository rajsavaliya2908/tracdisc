import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import ItemFilter from '../itemfilter';
import styles from './styles'

const ItemFilterCategory = ({ item, index, onDateClick, onFilterCategoryClick, onResetClick }) => {

    const handleOnFilterClick = (filterIndex) => {
        onFilterCategoryClick(index, filterIndex)
    }

    const handleOnDateClick = (filterIndex, type) => {
        onDateClick(index, filterIndex, type)
    }
    const renderItemFilter = (props) => {
        return (<ItemFilter {...props} onFilterClick={handleOnFilterClick} onDateClick={handleOnDateClick} />)
    }
    const handleOnResetClick = () => {
        onResetClick(index)
    }
    return (
        <View style={styles.vMainContainer}>
            <View style={styles.vTitleContainer}>
                <Text style={[CS.textLightBlackRegular, styles.tTitle]}>{item.title}</Text>
                <Text style={[CS.textPrimaryRegular, styles.tReset]} onPress={handleOnResetClick}>{string.Reset}</Text>
            </View>
            <FlatList
                keyExtractor={(item, index) => `filter-${index}`}
                showsVerticalScrollIndicator={false}
                bounces={false}
                overScrollMode='never'
                renderItem={renderItemFilter}
                data={item.list} />
        </View>
    );
}

export default ItemFilterCategory;
