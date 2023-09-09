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
    iConfirmEmail: {
        marginHorizontal: StyleConfig.smartWidthScale(20),
        marginVertical: StyleConfig.smartScale(15)
    },
    tAlmostDone: {
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(30),
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    tCodeInfo: {
        marginVertical: StyleConfig.smartScale(10),
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(18),
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    otpContainer: {
        width: StyleConfig.smartWidthScale(320),
        height: StyleConfig.smartScale(60),
        alignSelf: 'center',
        marginVertical: StyleConfig.smartScale(15)

    },
    underlineStyleBase: {
        fontSize: StyleConfig.countPixelRatio(19),
        borderColor: color.border_color,
        color: color.black,
        borderWidth: StyleConfig.countPixelRatio(1.5),
        borderRadius: StyleConfig.countPixelRatio(10)

    },
    vSendAgainContainer: {
        marginVertical: StyleConfig.smartScale(20)
    },
    vSpaceContainer: {
        flex: 1
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
    tResendNow: {
        paddingVertical: StyleConfig.smartScale(5)
    },
    tEmail: {
        marginHorizontal: StyleConfig.smartWidthScale(20),
        fontSize: StyleConfig.countPixelRatio(21),
        textAlign: 'left'
    }
});

export default styles