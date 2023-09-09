import React from 'react'
import { View, Image, Pressable, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import CS from '../../../utils/styles'
import styles from './styles'


const CommonToolbar = (props) => {
    const {
        containerStyle,
        title,
        textStyle,
        isRightButton,
        isLeftButton,
        leftIcon,
        isExtraSpace,
        rightIcon,
        onLeftClickListener,
        onRightClickListener
    } = props
    return (
        <SafeAreaView
            forceInset={{ bottom: 'never', top: 'always' }}
            style={[styles.saContainer, containerStyle]}>

            <View style={styles.vToolbarContainer}>
                <Pressable style={styles.pIconContainer} onPress={isLeftButton ? onLeftClickListener : null}>
                    {isLeftButton ? leftIcon : null}
                </Pressable>
                <Text style={[CS.textBlackSemibold, styles.tTitle, textStyle]}>{title}</Text>
                <Pressable style={styles.pIconContainer} onPress={isRightButton ? onRightClickListener : null}>
                    {isRightButton ? rightIcon : null}
                </Pressable>
            </View>
            {isExtraSpace ? <View style={styles.vExtraContainer} /> : null}
        </SafeAreaView>
    )
}

export default CommonToolbar

