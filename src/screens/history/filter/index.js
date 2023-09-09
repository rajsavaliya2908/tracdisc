import React, { useEffect, useState } from 'react';
import CommonToolbar from '../../../components/custom/commontoolbar';
import { string } from '../../../utils/string';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import StyleConfig from '../../../assets/StyleConfig';
import { Cancel } from '../../../assets/svgs';
import { FlatList } from 'react-native-gesture-handler';
import { filterList } from '../../../utils/const'
import ItemFilterCategory from '../../../components/custom/itemfiltercategory';
import moment from 'moment';
import DateTimePickerModal from '../../../components/library/datepickermodal'
import { Type_Of_Date } from '../../../utils/enum';

const FilterScreen = ({ navigation, route }) => {
    const [filters, setFilters] = useState([])
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [type, setType] = useState('');
    const [minimumDate, setMinimumDate] = useState(null);
    const [lastCategoryIndex, setLastCategoryIndex] = useState('')
    const [lastFilterIndex, setLastFilterIndex] = useState('')
    const { selectedfilter, onGoBack } = route.params

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const handleConfirm = (date) => {
        const pickDate = moment(date)
        switch (type) {
            case Type_Of_Date.StartDate:
                const categoryNewDetail = filters[lastCategoryIndex]
                const filterNewDetail = categoryNewDetail.list[lastFilterIndex]
                filterNewDetail.startdate = pickDate
                filterNewDetail.enddate = pickDate
                setFilters([...filters])
                break
            case Type_Of_Date.EndDate:
                const categoryDetail = filters[lastCategoryIndex]
                const filterDetail = categoryDetail.list[lastFilterIndex]
                filterDetail.enddate = pickDate
                setFilters([...filters])
                break
        }
        hideDatePicker();
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleOnLeftClick = () => {
        var selectionList = []
        filters.forEach(item => {
            const filterList = item.list.filter(item => item.isChecked === true)
            selectionList = selectionList.concat(filterList)
        })

        onGoBack(selectionList)
        navigation.goBack()
    }

    const handleOnFilterCategoryClick = (categoryIndex, filterIndex) => {
        const categoryDetail = filters[categoryIndex]
        const filterDetail = categoryDetail.list[filterIndex]
        filterDetail.isChecked = !filterDetail.isChecked
        setFilters([...filters])
    }
    const handleOnResetClick = (index) => {
        const categoryDetail = filters[index]
        categoryDetail.list.forEach(item => {
            item.isChecked = false
            if (item.isDatePicker) {
                item.startdate = ''
                item.enddate = ''
            }
        })
        setFilters([...filters])
    }

    const handleOnDateClick = (categoryIndex, filterIndex, type) => {
        setType(type)
        setLastCategoryIndex(categoryIndex)
        setLastFilterIndex(filterIndex)
        setMinimunOnPickDate(categoryIndex, filterIndex, type)
    }
    const setMinimunOnPickDate = (categoryIndex, filterIndex, type) => {
        switch (type) {
            case Type_Of_Date.StartDate:
                setMinimumDate(moment().toDate())
                break
            case Type_Of_Date.EndDate:
                const categoryDetail = filters[categoryIndex]
                const filterDetail = categoryDetail.list[filterIndex]
                if (filterDetail.startdate) {
                    setMinimumDate(moment(filterDetail.startdate).toDate())
                } else {
                    setMinimumDate(moment().toDate())
                }

                break
        }
        showDatePicker()
    }
    const renderFilterCategory = (props) => {
        return (
            <ItemFilterCategory {...props}
                onFilterCategoryClick={handleOnFilterCategoryClick}
                onDateClick={handleOnDateClick}
                onDateClick={handleOnDateClick}
                onResetClick={handleOnResetClick} />)
    }

    useEffect(() => {
        filterList.forEach((subcategoryItem) => {
            subcategoryItem.list.forEach(item => {
                item.isChecked = false
            })
        })
        if (selectedfilter.length) {
            filterList.forEach((subcategoryItem) => {
                subcategoryItem.list.forEach(item => {
                    selectedfilter.forEach(filteritem => {
                        if (item.title === filteritem.title) {
                            item.isChecked = true
                        }
                    })
                })

            })
        }
        setFilters(filterList)
    }, [])
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Filter}
                isLeftButton
                leftIcon={
                    <Cancel width={StyleConfig.countPixelRatio(22)} height={StyleConfig.countPixelRatio(22)} />
                }
                onLeftClickListener={handleOnLeftClick}

            />
            <FlatList
                keyExtractor={(item, index) => `filterCategory-${index}`}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                bounces={false}
                data={filters}
                renderItem={renderFilterCategory}
            />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                minimumDate={minimumDate}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </SafeAreaView>
    );
}

export default FilterScreen;
