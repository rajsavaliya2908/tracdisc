
import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: color.white
    },
    iBackIcon: {
        width: StyleConfig.countPixelRatio(35),
        height: StyleConfig.countPixelRatio(35),
        resizeMode: 'contain',
    },
    ctContainer: {
        alignSelf: 'center',
        marginTop: StyleConfig.smartScale(60)
    },
    tInfo: {
        marginVertical: StyleConfig.smartScale(2),
        fontSize: StyleConfig.countPixelRatio(17),
        alignSelf: 'center',
    },
    tThankYou: {
        marginVertical: StyleConfig.smartScale(20),
        alignSelf: 'center',
        fontSize: StyleConfig.countPixelRatio(30)
    },
    vStatusCotainer: {
        marginVertical: StyleConfig.smartScale(25),
        backgroundColor: color.light_blue,
        marginHorizontal: StyleConfig.smartWidthScale(20),
        borderRadius: StyleConfig.countPixelRatio(10),
        paddingVertical: StyleConfig.smartScale(15),
        borderWidth: StyleConfig.countPixelRatio(2),
        borderColor: color.border_color
    },
    tStatus: {
        fontSize: StyleConfig.countPixelRatio(19)
    },
    vSpaceCotainer: {
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