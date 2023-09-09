import { StyleSheet } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: color.white
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
    tSuccess: {
        alignSelf: 'center',
        marginHorizontal: StyleConfig.smartWidthScale(30),
        marginVertical: StyleConfig.smartScale(10),
        fontSize: StyleConfig.countPixelRatio(32),
        color: color.black_dull
    },
    iIcon: {
        marginVertical: StyleConfig.smartScale(10),
        alignSelf: 'center'
    }
});

export default styles