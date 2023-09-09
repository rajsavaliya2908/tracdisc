import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import CommonToolbar from '../../../components/custom/commontoolbar';
import { string } from '../../../utils/string';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import { ForwardChange } from '../../../assets/svgs';
import CS from '../../../utils/styles';
import StyleConfig from '../../../assets/StyleConfig';
import Routes from '../../../router/routes';

const ConfirmNameChangeScreen = ({ navigation, route }) => {
    const { name, currentName } = route.params
    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const handleOnClickButton = () => {
        navigation.navigate(Routes.RequestSubmit, { info: string.Verify_Name_Update_Request, title: string.We_Have_Your_Request })
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Confirm_Name_Change}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            <View style={styles.vMainNameInfoContainer}>
                <Text style={[CS.textLightBlackRegular, styles.tTitleInfo]}>{string.You_Are_Changing_Name}</Text>
                <View style={styles.vNameInfoContainer}>
                    <View style={styles.vNameContainer}>
                        <Text style={[CS.textLightBlackRegular, styles.tTitle]}>{string.From}</Text>
                        <Text style={[CS.textLightBlackSemibold, styles.tDetail]}>{currentName}</Text>
                    </View>
                    <ForwardChange height={StyleConfig.countPixelRatio(20)} width={StyleConfig.countPixelRatio(20)} />
                    <View style={styles.vNameContainer}>
                        <Text style={[CS.textLightBlackRegular, styles.tTitle]}>{string.To}</Text>
                        <Text style={[CS.textLightBlackSemibold, styles.tDetail, styles.tPrimaryColor]}>{name}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.vInfoContainer}>
                <Text style={[CS.textLightBlackRegular, styles.tInfo]}>
                    {string.Name_Will_Change}
                </Text>
            </View>
            <View style={styles.vSpaceContainer} />
            <Pressable style={styles.pButtonContainer} onPress={handleOnClickButton}>

                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Update_Name}</Text>
            </Pressable>

        </SafeAreaView>
    );

}
export default ConfirmNameChangeScreen;
