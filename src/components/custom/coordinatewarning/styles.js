import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    vWarningContainer: {
        borderWidth: StyleConfig.countPixelRatio(1.5),
        borderRadius: StyleConfig.countPixelRatio(10),
        borderColor: color.blue_border,
        backgroundColor: color.light_warning,
        marginVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        paddingVertical: StyleConfig.smartScale(10)
    },
    tWarningContainer: {
        marginHorizontal: StyleConfig.smartWidthScale(15),
        marginVertical: StyleConfig.smartScale(1),
        textAlign: 'left'
    },
    tCoordinate: {
        marginHorizontal: StyleConfig.smartWidthScale(15),
        fontSize: StyleConfig.countPixelRatio(17),
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(1),
        textAlign: 'left'
    },
    tWarning: {
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        textAlign: 'left'
    },
    tWarningInfo: {
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        textAlign: 'left'
    }
});

export default styles