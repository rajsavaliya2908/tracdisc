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
   
    tEmail: {
        marginVertical: StyleConfig.smartScale(5),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20),
        fontSize: StyleConfig.countPixelRatio(22)
    },
    tCheckEmail: {
        marginVertical: StyleConfig.smartScale(10),
        fontSize: StyleConfig.countPixelRatio(28),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    tWeSent: {
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    tEmailLinked: {
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'left',
        marginVertical: StyleConfig.smartScale(10),
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    otpContainer: {
        width: StyleConfig.smartWidthScale(320),
        height: StyleConfig.smartScale(60),
        alignSelf: 'center',
        marginVertical: StyleConfig.smartScale(5)

    },
    underlineStyleBase: {
        fontSize: StyleConfig.countPixelRatio(19),
        borderColor: color.border_color,
        color: color.black,
        borderWidth: StyleConfig.countPixelRatio(1.5),
        borderRadius: StyleConfig.countPixelRatio(10)

    },
    vSendAgainContainer: {
        marginVertical: StyleConfig.smartScale(10)
    },
    tResendNow: {
        paddingVertical: StyleConfig.smartScale(5)
    },
    vWarningContainer: {
        paddingVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        paddingHorizontal: StyleConfig.smartWidthScale(20),
        backgroundColor: color.light_warning,
        borderRadius: StyleConfig.countPixelRatio(8),
        borderWidth: StyleConfig.countPixelRatio(2),
        borderColor: color.dark_blue_border,
        marginVertical: StyleConfig.smartScale(5)
    },
    tWarning: {
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(5),
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(17)
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
    kavContainer: {
        flexGrow: 1,
        paddingVertical: StyleConfig.smartScale(10)
    }
});

export default styles