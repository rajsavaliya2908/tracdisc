import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig'
import color from '../../../utils/color'

const styles = StyleSheet.create({
    vPaginationContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },

    vInDotContainer: {
        marginHorizontal: StyleConfig.smartWidthScale(3),
        width: StyleConfig.countPixelRatio(12),
        height: StyleConfig.countPixelRatio(12),
        borderRadius: StyleConfig.countPixelRatio(6),
        backgroundColor: color.dark_grey
    },
    vActiveColor: {
        backgroundColor: color.blue
    }
})

export default styles