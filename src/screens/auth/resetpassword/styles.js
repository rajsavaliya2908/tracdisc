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
        resizeMode: 'contain'
    },
    tCreatePassword: {
        marginVertical: StyleConfig.smartScale(10),
        fontSize: StyleConfig.countPixelRatio(28),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    tPasswordInfo: {
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    vSpaceContainer: {
        flex: 1,
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
    vInputContainer: {
        marginVertical: StyleConfig.smartScale(10)
    }

});

export default styles