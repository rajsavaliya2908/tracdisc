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
    tRequirement: {
        fontSize: StyleConfig.countPixelRatio(19),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20),
        marginVertical: StyleConfig.smartScale(10)
    },
    vInputContainer: {
        marginVertical: StyleConfig.smartScale(5)
    },
    tInviteInfo: {
        fontSize: StyleConfig.countPixelRatio(16),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20),
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

        borderRadius: StyleConfig.countPixelRatio(10),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: color.blue_border,
        paddingVertical: StyleConfig.smartScale(10),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        backgroundColor: color.light_warning,
        marginVertical: StyleConfig.smartScale(30)
    },
    tWarningContainer: {
        marginVertical: StyleConfig.smartScale(3),
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    tWarning: {
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        textAlign: 'left'
    },
    tWarningDetail: {
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        textAlign: 'left'
    },
});
export default styles