import React from 'react';
import { FlatList, Image, View } from 'react-native';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import CommonToolbar from '../../../components/custom/commontoolbar';
import AppImages from '../../../assets/pngs';
import { string } from '../../../utils/string';
import { notificationList } from '../../../utils/dummystring'


const NotificaionScreen = ({ navigation }) => {
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const renderNotificationItem = () => {

    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Notification}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            <FlatList
                bounces={false}
                data={notificationList}
                renderItem={renderNotificationItem}
            />
        </SafeAreaView>
    );

}
export default NotificaionScreen;
