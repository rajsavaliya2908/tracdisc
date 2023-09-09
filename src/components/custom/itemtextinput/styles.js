import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    vMainContainer: {
        marginHorizontal: StyleConfig.smartWidthScale(20),
        marginVertical: StyleConfig.smartScale(8)
    },
    tLabel: {
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(16),
        marginVertical: StyleConfig.smartScale(8)
    },
    vInputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: StyleConfig.countPixelRatio(8),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: color.border_color,
        paddingHorizontal: StyleConfig.smartWidthScale(10),

    },
    leftIcon: {
        marginHorizontal: StyleConfig.smartWidthScale(5)
    },
    rightIcon: {
        marginHorizontal: StyleConfig.smartWidthScale(5)
    },
    tiContainer: {
        flex: 1,
        padding: 0,
        fontFamily: StyleConfig.fontRegular,
        paddingVertical: StyleConfig.smartScale(12),
        fontSize: StyleConfig.countPixelRatio(17),
        paddingHorizontal: StyleConfig.smartWidthScale(8),
        color: color.dark_blue

    },
    tiDisableColor: {
        backgroundColor: color.border_color
    }
});

export default styles