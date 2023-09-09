import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import StyleConfig from '../../../assets/StyleConfig';
import { Notification } from '../../../assets/svgs';
import { dummyString } from '../../../utils/dummystring';
import CS from '../../../utils/styles';
import styles from './styles';

const UserDetailHeader = ({ isNotification }) => {
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'always', bottom: 'never' }}>
            <View style={styles.vMainContainer}>
                <View style={styles.vProfileContainer}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' }} style={styles.iProfile} />
                </View>
                <View style={styles.vDetailContainer}>
                    <Text style={[CS.textLightBlackSemibold, styles.tName]}>{dummyString.Person_Name}</Text>
                    <Text style={[CS.textLightBlackRegular, styles.tCompany]}>{dummyString.Company_Name}</Text>
                </View>
                {isNotification && <Pressable>
                    <Notification width={StyleConfig.countPixelRatio(40)} height={StyleConfig.countPixelRatio(40)} />
                    <View style={styles.vCountContainer}>
                        <Text style={[CS.textWhiteRegular, styles.tCount]}>{dummyString.Count}</Text>
                    </View>
                </Pressable>}
            </View>
        </SafeAreaView>
    );
}

export default UserDetailHeader;
