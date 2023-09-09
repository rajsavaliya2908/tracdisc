import { StyleSheet } from 'react-native'
import color from '../../utils/color'
import StyleConfig from '../../assets/StyleConfig'

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: color.primarycolor
    },
    vContainer: {
        marginTop: StyleConfig.smartScale(100),
        flex: 1,
        backgroundColor: color.white
    },
    iProfile: {
        alignSelf: 'center',
        borderWidth: StyleConfig.countPixelRatio(5),
        borderColor: color.white,
        marginTop: StyleConfig.smartScale(-30),
        height: StyleConfig.countPixelRatio(100),
        width: StyleConfig.countPixelRatio(100),
        borderRadius: StyleConfig.countPixelRatio(50)
    },
    vProfileContainer: {
        paddingVertical: StyleConfig.smartScale(5),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        marginTop: StyleConfig.smartScale(-60),
        backgroundColor: color.white,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        borderRadius: StyleConfig.countPixelRatio(10),
    },
    tProfileName: {
        marginVertical: StyleConfig.smartScale(5),
        fontSize: StyleConfig.countPixelRatio(22),
        color: color.black_dull
    },
    tProfileInfo: {
        marginVertical: StyleConfig.smartScale(3),
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(16),

    },
    tEditProfile: {
        paddingVertical: StyleConfig.smartScale(12),
    },
    flMain: {
        marginVertical: StyleConfig.smartScale(5)
    },
    flContainer: {
        paddingVertical: StyleConfig.smartScale(5)
    },
    tLogout: {
        paddingVertical: StyleConfig.smartScale(8),
        paddingHorizontal: StyleConfig.smartWidthScale(20),
        fontSize: StyleConfig.countPixelRatio(18)
    },
    tVersion: {
        marginVertical: StyleConfig.smartScale(5),
        fontSize: StyleConfig.countPixelRatio(14)
    }

});

export default styles