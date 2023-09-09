import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import Method from '../../../utils/method';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1
    },
    mapview: {
        flex: 1
    },
    pContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        marginHorizontal: StyleConfig.smartWidthScale(10),
        marginVertical: Method.hasNotch() ? StyleConfig.smartScale(50) : StyleConfig.smartScale(20),
        height: StyleConfig.countPixelRatio(30),
        width: StyleConfig.countPixelRatio(30),
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles