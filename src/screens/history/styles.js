import { StyleSheet } from 'react-native'
import StyleConfig from '../../assets/StyleConfig';
import color from '../../utils/color';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: color.white

    },
    iBackIcon: {
        width: StyleConfig.countPixelRatio(35),
        height: StyleConfig.countPixelRatio(35),
        resizeMode: 'contain'
    },
    flContainer: {
        paddingVertical: StyleConfig.smartScale(5)
    },
    tShowResult: {
        marginHorizontal: StyleConfig.smartWidthScale(20),
        fontSize: StyleConfig.countPixelRatio(18),
        marginVertical: StyleConfig.smartScale(5),
        textAlign: 'left'
    },
    flFilterContainer: {
        paddingHorizontal: StyleConfig.smartWidthScale(10)
    },
    vFilterContainer: {
        paddingVertical: StyleConfig.smartScale(8)
    }
});

export default styles