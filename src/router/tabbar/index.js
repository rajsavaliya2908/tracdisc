import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import StyleConfig from '../../assets/StyleConfig';
import { HistoryActive, HistoryInactive, HomeActive, HomeInactive, AccountActive, AccountInactive } from '../../assets/svgs';
import { Type_Of_Tab } from '../../utils/enum';
import { string } from '../../utils/string';
import CS from '../../utils/styles';
import Routes from '../routes';
import styles from './styles'


const TabBar = ({ navigation }) => {
    const [tabIndex, setTabIndex] = useState(Type_Of_Tab.Home)
    const isHistorySelected = tabIndex === Type_Of_Tab.History
    const isHomeSelected = tabIndex === Type_Of_Tab.Home
    const isSettingsSelected = tabIndex === Type_Of_Tab.Settings

    const handleOnTabClick = (type) => {
        switch (type) {
            case Type_Of_Tab.History:
                setTabIndex(Type_Of_Tab.History)
                navigation.navigate(Routes.History)
                break;
            case Type_Of_Tab.Home:
                setTabIndex(Type_Of_Tab.Home)
                navigation.navigate(Routes.Home)
                break;
            case Type_Of_Tab.Settings:
                setTabIndex(Type_Of_Tab.Settings)
                navigation.navigate(Routes.Settings)
                break;
            default:
                navigation.navigate(Routes.Home)
        }
    }
    return (
        <SafeAreaView style={styles.saContainer}>
            <View style={styles.vTabContainer}>
                <Pressable style={styles.pTabContainer} onPress={() => { handleOnTabClick(Type_Of_Tab.History) }}>
                    {isHistorySelected ? <HistoryActive width={StyleConfig.countPixelRatio(28)} height={StyleConfig.countPixelRatio(28)} /> :
                        <HistoryInactive width={StyleConfig.countPixelRatio(28)} height={StyleConfig.countPixelRatio(28)} />}
                    <Text style={[CS.textLightBlackRegular, styles.tTabTitle, isHistorySelected && styles.tSelectedText]}>{string.History}</Text>
                </Pressable>
                <Pressable style={styles.pTabContainer} onPress={() => { handleOnTabClick(Type_Of_Tab.Home) }}>
                    <View style={[styles.vHomeContainer, isHomeSelected && styles.vSelectedBG]}>
                        {isHomeSelected ? <HomeActive width={StyleConfig.countPixelRatio(28)} height={StyleConfig.countPixelRatio(28)} /> :
                            <HomeInactive width={StyleConfig.countPixelRatio(28)} height={StyleConfig.countPixelRatio(28)} />}
                    </View>
                    <Text style={[CS.textLightBlackRegular, styles.tHomeTitle, isHomeSelected && styles.tSelectedText]}>{string.Home}</Text>
                </Pressable>
                <Pressable style={styles.pTabContainer} onPress={() => { handleOnTabClick(Type_Of_Tab.Settings) }}>
                    {isSettingsSelected ? <AccountActive width={StyleConfig.countPixelRatio(28)} height={StyleConfig.countPixelRatio(28)} /> :
                        <AccountInactive width={StyleConfig.countPixelRatio(28)} height={StyleConfig.countPixelRatio(28)} />}
                    <Text style={[CS.textLightBlackRegular, styles.tTabTitle, isSettingsSelected && styles.tSelectedText]}>{string.Account}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default TabBar;
