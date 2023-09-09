import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import UserDetailHeader from '../../components/custom/userdetailheader';
import { dashboardList } from '../../utils/const';
import { dummyString } from '../../utils/dummystring';
import { string } from '../../utils/string';
import CS from '../../utils/styles';
import styles from './styles'
import ItemDashboard from '../../components/custom/itemdashboard'
import DialogPermission from '../../components/custom/dialogpermission';
import { MapsLocation, NFC } from '../../assets/svgs';
import StyleConfig from '../../assets/StyleConfig';
import NfcManager from 'react-native-nfc-manager';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { showToast } from '../../utils/toast';
import { Type_Of_Dashboard_Category } from '../../utils/enum';
import Routes from '../../router/routes';


const HomeScreen = ({ navigation }) => {
    const [isLocationChecked, setIsLocationChecked] = useState(false)
    const [isNfcChecked, setIsNfcChecked] = useState(false)
    const [isNfcSupported, setIsNfcSupported] = useState(false)

    const handleOnDashboardItemClick = (index) => {
        switch (index) {
            case Type_Of_Dashboard_Category.Nfc:
                if (isNfcSupported){
                    navigation.navigate(Routes.NfcInfo)
                }
                else{
                    showToast(string.Device_Not_Supported_NFC)
                }
                break
            case Type_Of_Dashboard_Category.Location:
                navigation.navigate(Routes.AddDeviceId)
                break

        }
    }
    const renderDashboardItem = (props) => {
        return (<ItemDashboard {...props} onDashBoardItemclick={handleOnDashboardItemClick} />)
    }
    const checkPermissions = async () => {
        check(Platform.select({
            ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        })).then((result) => {
            switch (result) {
                case RESULTS.GRANTED:
                    setIsLocationChecked(true)
                    break;
            }
        }).catch((error) => {
            setIsLocationChecked(false)
        });
        const result = await NfcManager.isEnabled()
        const isNfcSupported = await NfcManager.isSupported()
        setIsNfcChecked(result)
        setIsNfcSupported(isNfcSupported)

    }
    useEffect(() => {
        checkPermissions()
    }, [])
    const AddDeviceFunctionality = () => {
        return (
            <FlatList
                keyExtractor={(item, index) => `FlatList-${index}`}
                style={styles.flMain}
                contentContainerStyle={styles.flContainer}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                bounces={false}
                data={dashboardList}
                renderItem={renderDashboardItem}
            />)
    }
    const handleOnLocationClick = () => {
        request(Platform.select({
            ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        })).then((result) => {
            switch (result) {
                case 'granted':
                    setIsLocationChecked(true)
                    break
                case 'blocked':
                    showToast(string.Please_On_Location_From_Setting)
                    break
            }
        })
            .catch((error) => {
                console.log(error, 'error')
                // …
            });
    }
    const handleOnSettingClick = () => {
        alert('In Development')
    }
    return (
        <View style={styles.vContainer}>
            <UserDetailHeader isNotification/>
            <View style={styles.vMainContainer}>
                <View style={styles.vDetailContainer}>
                    {(isLocationChecked && isNfcChecked) && <AddDeviceFunctionality />}
                    {(!isNfcChecked && isNfcSupported) && <DialogPermission
                        buttontitle={string.Go_To_Settings}
                        title={string.Enable_NFC}
                        icon={
                            <NFC
                                width={StyleConfig.countPixelRatio(100)}
                                height={StyleConfig.countPixelRatio(100)}
                                style={styles.iIcon}
                            />}
                        info={string.Please_Turn_On_NFC_To_Continue}
                        onDialogButtonClick={handleOnSettingClick} />}
                    {!isLocationChecked && <DialogPermission
                        buttontitle={string.Enable_Location}
                        title={string.Enable_Location}
                        icon={
                            <MapsLocation
                                width={StyleConfig.countPixelRatio(100)}
                                height={StyleConfig.countPixelRatio(100)}
                                style={styles.iIcon}
                            />}
                        info={string.We_Will_Need_Location_To_Start}
                        onDialogButtonClick={handleOnLocationClick} />}


                </View>
                <Text style={[CS.textLightBlackRegular, styles.tVersion]}>{string.App_Version}{string.Colon}{string.Space}{dummyString.App_Version}</Text>
            </View>
        </View>
    );
}

export default HomeScreen;
