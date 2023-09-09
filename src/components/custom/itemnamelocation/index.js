import React from 'react';

import { View, KeyboardAvoidingView, Text, TextInput, Pressable } from 'react-native';
import { Address, CurrentLocation } from '../../../assets/svgs';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'
import { dummyString } from '../../../utils/dummystring'
import StyleConfig from '../../../assets/StyleConfig';

const ItemNameLocation = ({ onContinueClick}) => {
    const handleOnLocationClick = () => {

    }
    return (
        <KeyboardAvoidingView style={styles.kavContainer} behavior="position">
            <CurrentLocation style={styles.iCurrentLocation} height={StyleConfig.countPixelRatio(120)} width={StyleConfig.countPixelRatio(120)} />
            <View style={styles.vContainer}>
                <Text style={[CS.textLightBlackBold, styles.tTitle]}>{string.Name_The_Location}</Text>
                <TextInput style={styles.tiContainer} />
                <View style={styles.vRowLocationContainer}>
                    <Pressable style={styles.pLocationContainer} onPress={handleOnLocationClick}>
                        <Address height={StyleConfig.countPixelRatio(30)} width={StyleConfig.countPixelRatio(30)} />
                    </Pressable>
                    <View style={styles.vDetailContainer}>
                        <Text style={[CS.textLightBlackSemibold, styles.tCoordination]}>{dummyString.Lat}{string.Comma}{dummyString.Long}</Text>
                        <Text style={[CS.textLightBlackRegular, styles.tAddress]}>{dummyString.Address}</Text>
                        <View style={styles.vLineContainer} />
                        <Text style={[CS.textLightBlackSemibold, styles.tDeviceId]}>{string.DeviceId}{string.Colon}{dummyString.DeviceId}</Text>
                    </View>
                </View>
                <Pressable style={styles.pButtonContainer} onPress={onContinueClick}>
                    <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Continue}</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>


    );
}

export default ItemNameLocation;
