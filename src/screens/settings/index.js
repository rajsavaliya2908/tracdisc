import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import { dummyString } from '../../utils/dummystring';
import { string } from '../../utils/string';
import CS from '../../utils/styles';
import { FlatList } from 'react-native-gesture-handler'
import { settingList } from '../../utils/const'
import ItemSetting from '../../components/custom/itemsetting';
import Routes from '../../router/routes';

const SettingsScreen = ({ navigation }) => {
    const [list, setList] = useState(settingList)

    useEffect(() => {
        list[0].value = 'User'
        list[1].value = 'Active'
        list[2].value = '7109ab'
        setList([...list])
    }, [])
    const handleSettingItemPress = (index) => {
        if (index === 2) {
            navigation.navigate(Routes.UpdateOrganization, { organizationInfo: list[2] })
        }
    }
    const renderSettingItem = (props) => {
        return (<ItemSetting {...props} onSettingItemPress={handleSettingItemPress} />)
    }
    const handleOnEditPress = () => {
        navigation.navigate(Routes.EditProfile)
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ bottom: 'never' }}>
            <View style={styles.vContainer}>
                <View style={styles.vProfileContainer}>
                    <Image style={styles.iProfile} source={{ uri: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' }} />
                    <Text style={[CS.textLightBlackBold, styles.tProfileName]}>{dummyString.Person_Name}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tProfileInfo]}>{dummyString.Email}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tProfileInfo]}>{dummyString.Company_Name}</Text>
                    <Text style={[CS.textPrimarySemibold, styles.tEditProfile]} onPress={handleOnEditPress}>{string.Edit_Profile}</Text>
                </View>
                <View>
                    <FlatList
                        keyExtractor={(item, index) => `FlatList-${index}`}
                        style={styles.flMain}
                        contentContainerStyle={styles.flContainer}
                        renderItem={renderSettingItem}
                        data={list}
                        overScrollMode='never'
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    />
                </View>
                <Text style={[CS.textPrimaryRegular, styles.tLogout]}>{string.Logout}</Text>
                <Text style={[CS.textLightBlackRegular, styles.tVersion]}>{string.App_Version}{string.Colon}{dummyString.App_Version}</Text>

            </View>
        </SafeAreaView>
    );
}

export default SettingsScreen;
