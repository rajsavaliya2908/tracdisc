import { StyleSheet } from 'react-native'
import StyleConfig from '../../assets/StyleConfig';
import color from '../../utils/color';


const styles = StyleSheet.create({
    saContainer: {
        backgroundColor: color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.41,
        elevation: 12,
    },
    vTabContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: color.white
    },
    pTabContainer: {
        paddingVertical: StyleConfig.smartScale(12),
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: StyleConfig.smartScale(70),

    },
    vHomeContainer: {
        width: StyleConfig.countPixelRatio(70),
        height: StyleConfig.countPixelRatio(70),
        borderRadius: StyleConfig.countPixelRatio(35),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: StyleConfig.smartScale(-35),

        shadowColor: '#00000033',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.00,
        elevation: 12,
    },
    tTabTitle: {
        marginVertical: StyleConfig.smartScale(8),
        fontSize: StyleConfig.countPixelRatio(16)
    },
    tHomeTitle: {
        marginVertical: StyleConfig.smartScale(3),
        fontSize: StyleConfig.countPixelRatio(16)
    },
    tTabTitle: {
        marginVertical: StyleConfig.smartScale(5),
        fontSize: StyleConfig.countPixelRatio(16)
    },
    tSelectedText: {
        color: color.primarycolor
    },
    selectedHomeStroke: {
        color: color.white
    },
    vSelectedBG: {
        backgroundColor: color.primarycolor
    },
    tHomeTitle: {
        marginVertical: StyleConfig.smartScale(3),
        fontSize: StyleConfig.countPixelRatio(16)
    }
});

export default styles