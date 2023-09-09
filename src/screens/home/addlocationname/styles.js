import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';
import Method from '../../../utils/method';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1
    },
    iBackIcon: {
        width: StyleConfig.countPixelRatio(35),
        height: StyleConfig.countPixelRatio(35),
        resizeMode: 'contain'
    },
    vScanContainer: {
        flex: 1,
        backgroundColor: color.white
    },
    vMapContainer: {
        flex: 1,
        backgroundColor: color.white
    },
    mapview: {
        flex: 1
    },
    tScanDevice: {
        fontSize: StyleConfig.countPixelRatio(25),
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(10),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left'
    },
    tPlaceYourPhone: {
        fontSize: StyleConfig.smartWidthScale(16),
        marginVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left'
    },


});
export default styles