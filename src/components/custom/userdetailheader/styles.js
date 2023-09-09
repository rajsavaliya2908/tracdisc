import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    vMainContainer: {
        marginVertical: StyleConfig.smartScale(8),
        paddingHorizontal: StyleConfig.smartWidthScale(15),
        flexDirection: 'row',
        alignItems: 'center'
    },
    vDetailContainer: {
        marginVertical: StyleConfig.smartScale(20),
        flex: 1,
        marginHorizontal: StyleConfig.smartWidthScale(10)
    },
    saContainer: {
        backgroundColor: color.white
    },
    vProfileContainer: {
        marginHorizontal: StyleConfig.smartWidthScale(5),
        width: StyleConfig.countPixelRatio(74),
        height: StyleConfig.countPixelRatio(74),
        borderRadius: StyleConfig.countPixelRatio(37),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    iProfile: {
        width: StyleConfig.countPixelRatio(74),
        height: StyleConfig.countPixelRatio(74),
        borderRadius: StyleConfig.countPixelRatio(37),
        borderWidth: StyleConfig.countPixelRatio(3),
        borderColor: color.white,
    },
    tName: {
        fontSize: StyleConfig.countPixelRatio(22),
        textAlign: 'left',
        color: color.black_dull,
    },
    tCompany: {
        fontSize: StyleConfig.countPixelRatio(16),
        textAlign: 'left',
        color: color.black_dull,
    },
    vCountContainer: {
        position: 'absolute',
        right: 0,
        width: StyleConfig.countPixelRatio(20),
        height: StyleConfig.countPixelRatio(20),
        backgroundColor: color.primarycolor,
        borderRadius: StyleConfig.countPixelRatio(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    tCount: {
        fontSize: StyleConfig.countPixelRatio(10),
        color: color.white
    }
});

export default styles