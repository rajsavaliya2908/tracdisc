import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';
import Method from '../../../utils/method';

const styles = StyleSheet.create({
    pLocationContainer: {

    },
    kavContainer: {

        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,

        // backgroundColor: color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: Method.hasNotch() ? StyleConfig.smartScale(30) : StyleConfig.smartScale(10),
        marginHorizontal: StyleConfig.smartWidthScale(15),
        borderRadius: StyleConfig.countPixelRatio(10),
        // overflow: 'hidden'
    },
    vContainer: {
        borderRadius: StyleConfig.countPixelRatio(10),
        paddingVertical: StyleConfig.smartScale(10),
        backgroundColor: color.white,

    },
    tCoordination: {
        marginVertical: StyleConfig.smartScale(2),
        fontSize: StyleConfig.countPixelRatio(19),
        color: color.black_dull,
        textAlign: 'left'
    },
    tTitle: {
        fontSize: StyleConfig.countPixelRatio(24),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(15),
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(5)
    },
    tiContainer: {
        padding: 0,
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: color.border_color,
        marginHorizontal: StyleConfig.smartWidthScale(15),
        paddingVertical: StyleConfig.smartScale(12),
        borderRadius: StyleConfig.countPixelRatio(10),
        marginVertical: StyleConfig.smartScale(5),
        fontSize: StyleConfig.countPixelRatio(17),
        color: color.black_dull,
        fontFamily: StyleConfig.fontRegular,
        paddingHorizontal: StyleConfig.smartWidthScale(20)
    },
    pButtonContainer: {
        marginVertical: StyleConfig.smartScale(5),
        borderRadius: StyleConfig.countPixelRatio(10),
        marginHorizontal: StyleConfig.smartWidthScale(15),
        paddingVertical: StyleConfig.smartScale(12),
        backgroundColor: color.primarycolor
    },
    tButton: {
        fontSize: StyleConfig.countPixelRatio(20)
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
    vLineContainer: {
        height: StyleConfig.smartScale(1),
        backgroundColor: '#707070',
        opacity: 0.11,
        marginVertical: StyleConfig.smartScale(10)
    },
    iCurrentLocation: {
        marginEnd: StyleConfig.smartWidthScale(-25),
        marginBottom: StyleConfig.smartScale(-10),
        alignSelf: 'flex-end'
    },
    tAddress: {
        textAlign: 'left',
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(2),
        fontSize: StyleConfig.countPixelRatio(14)
    },
    tDeviceId: {
        textAlign: 'left',
        color: color.primarygrey,
        marginVertical: StyleConfig.smartScale(2),
        fontSize: StyleConfig.countPixelRatio(14)
    }
});

export default styles