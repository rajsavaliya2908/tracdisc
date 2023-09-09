import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig'
import color from '../../../utils/color'

const styles = StyleSheet.create({
    saContainer: {
        backgroundColor: color.white,
    },
    vExtraContainer: {
        height: StyleConfig.smartScale(10),
    },
    vToolbarContainer: {
        height: StyleConfig.smartScale(55),
        flexDirection: 'row',
        alignItems: 'center',

    },
    pIconContainer: {
        marginHorizontal: StyleConfig.smartWidthScale(5),
        height: StyleConfig.countPixelRatio(50),
        width: StyleConfig.countPixelRatio(50),
        justifyContent: 'center',
        alignItems: 'center'
    },
    iBack: {
        width: StyleConfig.countPixelRatio(25),
        height: StyleConfig.countPixelRatio(25),
        resizeMode: 'contain'
    },
    tTitle: {
        flex: 1,
        fontSize: StyleConfig.countPixelRatio(20)
    },

})

export default styles