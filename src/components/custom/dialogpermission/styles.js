import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig'
import color from '../../../utils/color'

const styles = StyleSheet.create({
    vContainer: {
        paddingVertical: StyleConfig.smartScale(10),
        marginVertical: StyleConfig.smartScale(30),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        backgroundColor: color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
        right: 0,
        left: 0,
        borderRadius: StyleConfig.countPixelRatio(10)
    },
    tTitle: {
        fontSize: StyleConfig.countPixelRatio(24),
        marginVertical: StyleConfig.smartScale(10),
        color: color.black_dull
    },
    tInfo: {
        alignSelf: 'center',
        marginHorizontal: StyleConfig.smartWidthScale(20),
        marginVertical: StyleConfig.smartScale(20)
    },
    pButtonContainer: {
        marginVertical: StyleConfig.smartScale(10),
        borderRadius: StyleConfig.countPixelRatio(10),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        paddingVertical: StyleConfig.smartScale(10),
        backgroundColor: color.primarycolor
    },
    tButton: {
        fontSize: StyleConfig.countPixelRatio(22)
    },
})

export default styles