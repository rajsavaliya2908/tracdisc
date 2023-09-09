import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';
import Method from '../../../utils/method';

const styles = StyleSheet.create({
    vContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,

        backgroundColor: color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingVertical: StyleConfig.smartScale(5),
        marginVertical: Method.hasNotch() ? StyleConfig.smartScale(50) : StyleConfig.smartScale(20),
        marginHorizontal: StyleConfig.smartWidthScale(15),
        borderRadius: StyleConfig.countPixelRatio(10),
    },
    iIcon: {
        marginVertical: StyleConfig.smartScale(5)
    },

    vRowLocationContainer: {
        paddingVertical: StyleConfig.smartScale(10),
        flexDirection: 'row',
        marginHorizontal: StyleConfig.smartWidthScale(15)
    },
    vDetailContainer: {
        flex: 1,
        marginHorizontal: StyleConfig.smartWidthScale(10)
    },
    tAddress: {
        textAlign: 'left',
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(2),
        fontSize: StyleConfig.countPixelRatio(16)
    },
    tDate: {
        textAlign: 'left',
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(2),
        fontSize: StyleConfig.countPixelRatio(13)
    },
    vLineContainer: {
        height: StyleConfig.smartScale(1),
        backgroundColor: '#707070',
        opacity: 0.11,
        marginVertical: StyleConfig.smartScale(10)
    },
    tDeviceId: {
        textAlign: 'left',
        marginVertical: StyleConfig.smartScale(2),
        fontSize: StyleConfig.countPixelRatio(14)
    }
});

export default styles