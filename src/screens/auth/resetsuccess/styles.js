import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: color.white
    },
    vMainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    tSuccess: {
        marginVertical: StyleConfig.smartScale(8),
        fontSize: StyleConfig.countPixelRatio(30),
        alignSelf: 'center'
    },
    iIcon: {
        marginVertical: StyleConfig.smartScale(10)
    },
    tPasswordReset: {
        marginVertical: StyleConfig.smartScale(8),
        fontSize: StyleConfig.countPixelRatio(18),
        alignSelf: 'center'
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