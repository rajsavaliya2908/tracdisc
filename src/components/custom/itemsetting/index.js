import React from 'react';
import { Pressable, Text, View } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import { ForwardSetting } from '../../../assets/svgs';
import CS from '../../../utils/styles';
import styles from './styles'

const ItemSetting = ({ item, index, onSettingItemPress }) => {
    const handleSettingItemPress = () => {
        onSettingItemPress(index)
    }
    return (
        <Pressable style={styles.vContainer} onPress={handleSettingItemPress}>
            <item.icon style={styles.iIcon} />
            <View style={styles.vDetailContainer}>
                <Text style={[CS.textLightBlackRegular, styles.tTitle]}>{item.title}</Text>
                <Text style={[CS.textLightBlackRegular, styles.tValue]}>{item.value}</Text>
            </View>
            {index === 2 && <ForwardSetting height={StyleConfig.countPixelRatio(15)} width={StyleConfig.countPixelRatio(15)} />}
        </Pressable>
    );
}

export default ItemSetting;
