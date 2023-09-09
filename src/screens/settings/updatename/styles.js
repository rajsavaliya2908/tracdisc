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

    tUnderReview: {
        marginVertical: StyleConfig.smartScale(15),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left'
    },
    vInfoContainer: {
        paddingVertical: StyleConfig.smartScale(5)
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
    tPendingReview: {
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(22),
    },
    vNoteContainer: {
        borderRadius: StyleConfig.countPixelRatio(10),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: color.blue_border,
        paddingVertical: StyleConfig.smartScale(10),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        backgroundColor: color.light_warning,
        marginVertical: StyleConfig.smartScale(10)
    },

    tNoteContainer: {
        marginVertical: StyleConfig.smartScale(3),
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    tNote: {
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        textAlign: 'left'
    },
    tVerificationCode: {
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        textAlign: 'left'
    },
    tYourName: {
        marginVertical: StyleConfig.smartScale(3),
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left'
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
    

});
export default styles