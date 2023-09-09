import React from 'react';
import { View, Text, Pressable } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import CS from '../../../utils/styles';
import styles from './styles'
import { ForwardPrimary } from '../../../assets/svgs'
const ItemDashboard = ({ item, index, onDashBoardItemclick }) => {
    return (
        <Pressable style={styles.pContainer} onPress={() => { onDashBoardItemclick(index) }}>
            <View style={styles.vRowContainer}>
                <item.icon style={styles.iIcon} width={StyleConfig.countPixelRatio(50)} height={StyleConfig.countPixelRatio(50)} />
                <Text style={[CS.textLightBlackRegular, styles.tTitle]}>{item.title}</Text>
                <ForwardPrimary width={StyleConfig.countPixelRatio(15)} height={StyleConfig.countPixelRatio(15)} style={styles.iIcon} />
            </View>

        </Pressable>
    );
}

export default ItemDashboard;
