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
    tAddDeviceId: {
        fontSize: StyleConfig.countPixelRatio(25),
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left'
    },
    tEnterDeviceDetail: {
        fontSize: StyleConfig.smartWidthScale(16),
        marginVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left'
    },
    tEG: {
        fontSize: StyleConfig.smartWidthScale(16),
        marginVertical: StyleConfig.smartScale(8),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    otpContainer: {
        width: StyleConfig.smartWidthScale(320),
        height: StyleConfig.smartScale(60),
        alignSelf: 'center',
        marginVertical: StyleConfig.smartScale(20)

    },
    underlineStyleBase: {
        fontSize: StyleConfig.countPixelRatio(19),
        borderColor: color.border_color,
        color: color.black,
        borderWidth: StyleConfig.countPixelRatio(1.5),
        borderRadius: StyleConfig.countPixelRatio(10)

    },
    vIndicatorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tPleaseWait: {
        marginVertical: StyleConfig.smartScale(10),
        fontSize: StyleConfig.countPixelRatio(18)
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
    disableButtonColor: {
        backgroundColor: color.graydisable
    }

});

export default styles