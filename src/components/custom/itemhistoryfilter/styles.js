import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    vContainer: {
        marginHorizontal: StyleConfig.smartWidthScale(5),
        borderRadius: StyleConfig.countPixelRatio(20),
        backgroundColor: color.primarycolor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: StyleConfig.smartScale(2),
        paddingHorizontal: StyleConfig.smartWidthScale(10),
    },
    tTitle: {
        paddingStart: StyleConfig.smartWidthScale(10),
        fontSize: StyleConfig.countPixelRatio(16),
    },
    pContainer: {
        width: StyleConfig.countPixelRatio(30),
        height: StyleConfig.countPixelRatio(30),
        justifyContent: 'center',
        alignItems: 'center'
    },
    iIcon: {
        marginStart: StyleConfig.smartScale(5)
    }

});

export default styles