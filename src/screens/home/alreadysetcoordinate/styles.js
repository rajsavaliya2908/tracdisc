import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: color.white

    },
    iBackIcon: {
        width: StyleConfig.countPixelRatio(35),
        height: StyleConfig.countPixelRatio(35),
        resizeMode: 'contain'
    },
    tConfirm: {
        fontSize: StyleConfig.countPixelRatio(25),
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left'
    },
    tPlaceYourPhone: {
        fontSize: StyleConfig.smartWidthScale(16),
        marginVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left'
    },
    tDeviceCodeCotainer: {
        marginVertical: StyleConfig.smartScale(8),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    tYouAreAbout: {
        textAlign: 'left'
    },
    tDeviceCode: {
        textAlign: 'left',
        color: color.black_dull
    },
    vSpaceContainer: {
        flex: 1,
    },
    pButtonContainer: {
        marginVertical: StyleConfig.smartScale(10),
        borderRadius: StyleConfig.countPixelRatio(10),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        paddingVertical: StyleConfig.smartScale(12),
        backgroundColor: color.primarycolor
    },
    tButton: {
        fontSize: StyleConfig.countPixelRatio(20)
    },
    vInfoContainer: {
        marginVertical: StyleConfig.smartScale(10)
    },
});

export default styles