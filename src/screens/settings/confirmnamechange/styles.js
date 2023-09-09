import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: color.white

    },
    tTitleInfo: {
        marginHorizontal: StyleConfig.smartWidthScale(20),
        fontSize: StyleConfig.countPixelRatio(19),
        marginVertical: StyleConfig.smartScale(10),
        textAlign: 'left'
    },
    iBackIcon: {
        width: StyleConfig.countPixelRatio(35),
        height: StyleConfig.countPixelRatio(35),
        resizeMode: 'contain'
    },
    vNameInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.white,
        marginHorizontal: StyleConfig.smartWidthScale(20),
        borderRadius: StyleConfig.countPixelRatio(10),
        paddingVertical: StyleConfig.smartScale(5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    vNameContainer: {
        paddingVertical: StyleConfig.smartScale(15),
        flex: 1,
        paddingHorizontal: StyleConfig.smartWidthScale(20)
    },
    tTitle: {
        fontSize: StyleConfig.countPixelRatio(14),
        marginVertical: StyleConfig.smartScale(1),
        textAlign: 'left'
    },
    tDetail: {
        marginVertical: StyleConfig.smartScale(1),
        textAlign: 'left',
        color: color.black
    },
    tPrimaryColor: {
        color: color.primarycolor
    },

    vMainNameInfoContainer: {
        marginVertical: StyleConfig.smartScale(5)
    },
    vInfoContainer: {
        borderRadius: StyleConfig.countPixelRatio(10),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: color.blue_border,
        paddingVertical: StyleConfig.smartScale(10),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        backgroundColor: color.light_warning,
        marginVertical: StyleConfig.smartScale(20)
    },
    tInfo: {
        marginVertical: StyleConfig.smartScale(3),
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        textAlign: 'left'
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
});
export default styles