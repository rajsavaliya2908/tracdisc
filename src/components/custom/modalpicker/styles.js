import { StyleSheet } from 'react-native'
import Method from '../../../utils/method';
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    modalContainer: {
        height: null,
        paddingBottom: Method.hasNotch()
            ? StyleConfig.smartScale(30)
            : StyleConfig.smartScale(20),
        backgroundColor: 'transparent',
    },
    vFlexSpace: {
        flex: 1,
    },

    vCameraContainer: {
        marginHorizontal: StyleConfig.smartWidthScale(10),
        backgroundColor: color.dark_white,
        borderRadius: StyleConfig.countPixelRatio(10),
        opacity: 0.92,
    },
    pButtonContainer: {
        paddingVertical: StyleConfig.smartScale(12),
        justifyContent: 'center',
        alignItems: 'center',
    },
    tTitle: {
        color: color.modal_blue,
        fontSize: StyleConfig.countPixelRatio(20),
    },
    vLineContainer: {
        height: StyleConfig.smartScale(0.8),
        backgroundColor: color.black,
        opacity: 0.0789,
    },
    tCancel: {
        color: color.modal_blue,
        fontSize: StyleConfig.countPixelRatio(20),
    },
    pCancelContainer: {
        marginTop: StyleConfig.smartScale(10),
        paddingVertical: StyleConfig.smartScale(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: StyleConfig.countPixelRatio(10),
        marginHorizontal: StyleConfig.smartWidthScale(10),
        backgroundColor: color.white,
    },
});

export default styles