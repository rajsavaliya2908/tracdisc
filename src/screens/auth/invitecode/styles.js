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
    iOfficePrimary: {
        marginTop: StyleConfig.smartScale(20),
        marginBottom: StyleConfig.smartScale(10),
        marginHorizontal: StyleConfig.smartWidthScale(20)
    },
    tFinalStep: {
        marginVertical: StyleConfig.smartScale(2),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20),
        fontSize: StyleConfig.countPixelRatio(30)
    },
    tInviteCode: {
        marginVertical: StyleConfig.smartScale(2),
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(20),
        fontSize: StyleConfig.countPixelRatio(17)
    },
    vInputContainer: {
        marginVertical: StyleConfig.smartScale(10)
    },
    tInfo: {
        marginHorizontal: StyleConfig.smartWidthScale(20),
        marginVertical: StyleConfig.smartScale(5),
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(17)
    },
    vSpaceContainer: {
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