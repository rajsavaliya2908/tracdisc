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
    pProfileContainer: {
        marginVertical: StyleConfig.smartScale(15),
        alignSelf: 'center',
        marginHorizontal: StyleConfig.smartWidthScale(5),
        width: StyleConfig.countPixelRatio(150),
        height: StyleConfig.countPixelRatio(150),
        borderRadius: StyleConfig.countPixelRatio(70),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    pIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    iProfile: {
        width: StyleConfig.countPixelRatio(150),
        height: StyleConfig.countPixelRatio(150),
        borderRadius: StyleConfig.countPixelRatio(75),
        borderWidth: StyleConfig.countPixelRatio(3),
        borderColor: color.white,

    },
});

export default styles