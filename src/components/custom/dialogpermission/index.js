import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const DialogPermission = ({ title, icon, info, buttontitle, onDialogButtonClick }) => {
    return (
        <View style={styles.vContainer}>
            <Text style={[CS.textLightBlackBold, styles.tTitle]}>{title}</Text>
            {icon}
            <Text style={[CS.textLightBlackRegular, styles.tInfo]}>{info}</Text>
            <Pressable pointerEvents={'box-only'} style={styles.pButtonContainer} onPress={() => { onDialogButtonClick() }}>
                <Text style={[CS.textWhiteBold, styles.tButton]}>{buttontitle}</Text>
            </Pressable>
        </View>
    );
}

export default DialogPermission;
