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
    tSignUpNow: {
        fontSize: StyleConfig.countPixelRatio(24),
        marginVertical: StyleConfig.smartScale(10)

    },
    kavContainer: {
        flexGrow: 1,
        paddingVertical: StyleConfig.smartScale(8)
    },
    vInputContainer: {
        paddingVertical: StyleConfig.smartScale(5)
    },
    tAgreeInfoContainer: {
        marginVertical: StyleConfig.smartScale(8),
        alignSelf: 'center',
        marginHorizontal: StyleConfig.smartWidthScale(40)
    },
    tSemiBoldText: {
        textAlign: 'left'
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
    tLoginInfoContainer: {
        marginVertical: StyleConfig.smartScale(10)
    },
    tLogin: {
        textAlign: 'left'
    },
    vSpaceContainer: {
        flex: 1
    }
});

export default styles