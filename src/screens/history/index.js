import React, { useState } from 'react';
import { Image, Text, FlatList, View } from 'react-native';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import CommonToolbar from '../../components/custom/commontoolbar'
import AppImages from '../../assets/pngs/index'
import { string } from '../../utils/string';
import { Filter } from '../../assets/svgs';
import StyleConfig from '../../assets/StyleConfig';
import { historyList } from '../../utils/dummystring'
import ItemHistory from '../../components/custom/itemhistory';
import Routes from '../../router/routes';
import CS from '../../utils/styles';
import ItemHistoryFilter from '../../components/custom/itemhistoryfilter';


const HistoryScreen = ({ navigation }) => {
    const [filterList, setFilterList] = useState([])
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const handleOnBackClick = (filters) => {
        setFilterList(filters)

    }
    const handleOnFilterClick = () => {
        navigation.navigate(Routes.Filter, { onGoBack: handleOnBackClick, selectedfilter: filterList })
    }
    const handleOnHistoryClick = () => {
        navigation.navigate(Routes.HistoryDetail)
    }

    const renderHistoryItem = (props) => {
        return (<ItemHistory {...props} onClickHistoryItem={handleOnHistoryClick} />)
    }
    const handleOnCancelClick = (index) => {
        filterList.splice(index, 1)
        setFilterList([...filterList])
    }
    const renderHistoryFilterItem = (props) => {
        return (<ItemHistoryFilter {...props} onCancelClick={handleOnCancelClick} />)
    }

    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.History}
                isLeftButton
                isRightButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                rightIcon={
                    <Filter width={StyleConfig.countPixelRatio(28)} height={StyleConfig.countPixelRatio(28)} />
                }
                onLeftClickListener={handleOnLeftClick}
                onRightClickListener={handleOnFilterClick}
            />
            {(historyList.length && filterList.length)
                ? <Text style={[CS.textLightBlackRegular, styles.tShowResult]}>{string.showing_results(historyList.length)}</Text> : <Text style={[CS.textLightBlackRegular, styles.tShowResult]}>{string.showing_last_results(historyList.length)}</Text>}
            {filterList.length ?
                <View style={styles.vFilterContainer}>
                    <FlatList
                        keyExtractor={(item, index) => `filter-${index}`}
                        data={filterList}
                        horizontal
                        contentContainerStyle={styles.flFilterContainer}
                        renderItem={renderHistoryFilterItem} />
                </View> : null}
            <FlatList
                contentContainerStyle={styles.flContainer}
                keyExtractor={(item, index) => `History-${index}`}
                data={historyList}
                renderItem={renderHistoryItem}
                showsVerticalScrollIndicator={false}
                bounces={false}
                overScrollMode='never'
            />
        </SafeAreaView>
    );
}

export default HistoryScreen;
