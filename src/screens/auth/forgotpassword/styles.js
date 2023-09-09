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
    vTitleInfoContainer: {
        marginVertical: StyleConfig.smartScale(5)
    },
    tTitle: {
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(28),
        marginVertical: StyleConfig.smartScale(5)
    },
    vRowTitleInfoContainer: {
        marginVertical: StyleConfig.smartScale(5),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        flexDirection: 'row',

    },
    vInstructionContainer: {
        marginVertical: StyleConfig.smartScale(10)
    },
    tTitleInfo: {
        flex: 1,
        marginHorizontal: StyleConfig.smartWidthScale(10),
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'left'
    },
    iCheckMark: {
        marginVertical: StyleConfig.smartScale(2)
    },
    tAddEmailInfo: {
        marginHorizontal: StyleConfig.smartWidthScale(20),
        fontSize: StyleConfig.countPixelRatio(19),
        textAlign: 'left',
        marginVertical: StyleConfig.smartScale(5)
    },
    vInputContainer: {
        marginVertical: StyleConfig.smartScale(5)
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
    }
});

export default styles