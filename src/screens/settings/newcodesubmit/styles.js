import { StyleSheet } from 'react-native';
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
    vContainer: {
        flex: 1,

    },
    vMainContainer: {
        flex: 1,
        justifyContent: 'center'
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
    tThankYou: {
        alignSelf: 'center',
        marginHorizontal: StyleConfig.smartWidthScale(30),
        marginVertical: StyleConfig.smartScale(5),
        fontSize: StyleConfig.countPixelRatio(32),
        color: color.black_dull
    },
    tOnceApprove: {
        marginHorizontal: StyleConfig.smartWidthScale(30),
        marginVertical: StyleConfig.smartScale(15),
        fontSize: StyleConfig.countPixelRatio(19),

    },
    vPendingContainer: {
        borderRadius: StyleConfig.countPixelRatio(10),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: color.blue_border,
        paddingVertical: StyleConfig.smartScale(12),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        backgroundColor: color.light_warning,
        marginVertical: StyleConfig.smartScale(30)
    },
    tPendingApproval: {
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(22),
    },
    tInfo: {

        marginHorizontal: StyleConfig.smartWidthScale(30),
        marginVertical: StyleConfig.smartScale(5),
        fontSize: StyleConfig.countPixelRatio(19),
    },
    iIcon: {
        marginVertical: StyleConfig.smartScale(15),
        alignSelf: 'center'
    }
});

export default styles