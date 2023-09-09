
import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

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
        borderRadius: StyleConfig.countPixelRatio(10)
    },
    iIcon: {
        alignSelf: 'center',
        marginVertical: StyleConfig.smartScale(30)
    },
    tPlacePhone: {
        fontSize: StyleConfig.countPixelRatio(18),
        color: color.black_dull,
        marginVertical: StyleConfig.smartScale(10)
    },
    tTitle: {
        fontSize: StyleConfig.countPixelRatio(20),
        marginVertical: StyleConfig.smartScale(10)
    },
    aiContainer: {
        marginVertical: StyleConfig.smartScale(15)
    },
    tPleaseWait: {
        marginVertical: StyleConfig.smartScale(10)
    },
    tCanTake: {
        marginVertical: StyleConfig.smartScale(10),
        color: color.black_dull
    }
});

export default styles