import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: color.white
    },
    ibContainer: {
        backgroundColor: color.light_blue,
        height: StyleConfig.smartScale(230),
        justifyContent: 'center',
        alignItems: 'center'
    },
    vContainer: {
        backgroundColor: color.white,
        flex: 1,
        marginTop: StyleConfig.smartScale(-10),
        borderTopLeftRadius: StyleConfig.countPixelRatio(10),
        borderTopRightRadius: StyleConfig.countPixelRatio(10),
    },
    tLogin: {
        fontSize: StyleConfig.countPixelRatio(24),
        marginVertical: StyleConfig.smartScale(10)

    },
    kavContainer: {
        flexGrow: 1,
        paddingVertical: StyleConfig.smartScale(10)
    },
    vInputContainer: {
        paddingVertical: StyleConfig.smartScale(5),
        marginTop: StyleConfig.smartScale(10)
    },
    checkedColor: {
        backgroundColor: color.primarycolor
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
    tSigupInfoContainer: {
        marginVertical: StyleConfig.smartScale(10)
    },
    tSignup: {
        textAlign: 'left'
    },
    tForgotPassword: {
        paddingVertical: StyleConfig.smartScale(5),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'right'
    },
    pRememberContainer: {
        marginVertical: StyleConfig.smartScale(15),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        flexDirection: 'row',
        alignItems: 'center'
    },
    vCheckContainer: {
        width: StyleConfig.countPixelRatio(24),
        height: StyleConfig.countPixelRatio(24),
        borderRadius: StyleConfig.countPixelRatio(12),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: color.primarycolor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tRemember: {
        fontSize: StyleConfig.countPixelRatio(17),
        marginHorizontal: StyleConfig.smartWidthScale(10)
    },
    vSpaceContainer: {
        flex: 1,
    }
});

export default styles