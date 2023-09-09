import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs';
import CommonToolbar from '../../../components/custom/commontoolbar';
import CoordinateWarning from '../../../components/custom/coordinatewarning';
import ItemCoordinateInfo from '../../../components/custom/itemcoordinateinfo';
import Routes from '../../../router/routes';
import Method from '../../../utils/method';
import { string } from '../../../utils/string';
import CS from '../../../utils/styles';
import styles from './styles'

const AlreadySetCoordinateScreen = ({
    navigation, route
}) => {

    const { deviceId } = route.params
    const handleOnLeftClick = () => {
        navigation.goBack()
    }

    const handleOnContinueClick = () => {
        alert('In Development')
    }
    const handleOnClickSetCoordinate = () => {
        navigation.navigate(Routes.AddLocationName, { isScanEnable: true })
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                isLeftButton
                title={string.Step2}
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            <Text style={[CS.textLightBlackBold, styles.tConfirm]}>{string.Confirm}</Text>
            <Text style={[CS.textLightBlackRegular, styles.tPlaceYourPhone]}>{string.The_Coordinates_already_Set}</Text>
            <Text style={styles.tDeviceCodeCotainer}>
                <Text style={[CS.textLightBlackRegular, styles.tYouAreAbout]}>{string.You_Are_About_To_Set}</Text>
                <Text style={[CS.textLightBlackSemibold, styles.tDeviceCode]}>{string.Space}{Method.getDeviceIdFromArray(deviceId)}</Text>
            </Text>
            <View style={styles.vInfoContainer}>
                <ItemCoordinateInfo onClickSetCoordinate={handleOnClickSetCoordinate} />
                <CoordinateWarning />
            </View>
            <View style={styles.vSpaceContainer} />
            <Pressable style={styles.pButtonContainer} onContinueClick={handleOnContinueClick}>
                <Text style={[CS.textWhiteSemibold, styles.tButton]}>{string.Continue}</Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default AlreadySetCoordinateScreen;
