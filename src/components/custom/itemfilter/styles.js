import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    vMainContainer: {
        marginVertical: StyleConfig.smartScale(5),
        marginHorizontal: StyleConfig.smartWidthScale(15),
        backgroundColor: color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 4.65,
        elevation: 3,
        borderRadius: StyleConfig.countPixelRatio(10),
        paddingVertical: StyleConfig.smartScale(10)
    },
    vInfoRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: StyleConfig.smartWidthScale(10)
    },
    tTitle: {
        flex: 1,
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(19),
        marginVertical: StyleConfig.smartWidthScale(5)
    },
    vCheckContainer: {
        width: StyleConfig.countPixelRatio(26),
        height: StyleConfig.countPixelRatio(26),
        borderRadius: StyleConfig.countPixelRatio(13),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: color.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: StyleConfig.smartWidthScale(5)

    },
    vSelectedColor: {
        backgroundColor: color.primarycolor
    },
    vDateContainer: {
        marginVertical: StyleConfig.smartScale(8),
        paddingHorizontal: StyleConfig.smartWidthScale(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    pDateContainer: {
        paddingVertical: StyleConfig.smartScale(10),
        marginHorizontal: StyleConfig.smartWidthScale(5),
        paddingHorizontal: StyleConfig.smartWidthScale(5),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: StyleConfig.countPixelRatio(10),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: color.border_color,
        flex: 1
    },
    tDate: {
        textAlign: 'left',
        flex: 1,
        marginHorizontal: StyleConfig.smartWidthScale(5),
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(17)
    },
    iIcon: {
        marginHorizontal: StyleConfig.smartWidthScale(10)
    }
});

export default styles