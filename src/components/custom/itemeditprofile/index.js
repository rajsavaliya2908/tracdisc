import React from 'react';
import { Pressable, Text, View } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { ForwardPrimary, ForwardSetting } from '../../../assets/svgs';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const ItemEditProfile = ({ item, index, onEditProfileItemPress, removeForwarIcon }) => {
    const handleEditProfileItemPress = () => {
        if (onEditProfileItemPress)
            onEditProfileItemPress(index)
    }
    return (
        <Pressable style={styles.vContainer} onPress={handleEditProfileItemPress}>
            <item.icon style={styles.iIcon} height={StyleConfig.countPixelRatio(40)} width={StyleConfig.countPixelRatio(40)} />
            <View style={styles.vDetailContainer}>
                {item.label && <Text style={[CS.textLightBlackRegular, styles.tTitle]}>{item.label}</Text>}
                {item.title && <Text style={[CS.textLightBlackRegular, styles.tValue]}>{item.title}</Text>}
                {item.isInEdit === 1 && <Text style={[CS.textPrimaryRegular, styles.tInfo]}>{item.info}</Text>}
            </View>
            {!removeForwarIcon && <View style={styles.vForwardContainer}>
                <ForwardPrimary height={StyleConfig.countPixelRatio(15)} width={StyleConfig.countPixelRatio(15)} />
            </View>}
        </Pressable>
    );
}

export default ItemEditProfile;
