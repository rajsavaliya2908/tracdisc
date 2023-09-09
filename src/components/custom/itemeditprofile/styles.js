import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    vContainer: {
        flexDirection: 'row',
        backgroundColor: color.white,
        marginVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        paddingHorizontal: StyleConfig.smartWidthScale(12),
        borderRadius: StyleConfig.countPixelRatio(10),
        paddingVertical: StyleConfig.smartScale(12),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    iIcon: {
        marginVertical: StyleConfig.smartScale(5),
        marginHorizontal: StyleConfig.smartWidthScale(5)
    },
    vDetailContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: StyleConfig.smartWidthScale(5)
    },
    tTitle: {
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(14),
        color: color.primarygrey
    },
    tValue: {
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(18),
        color: color.black_dull
    },
    tInfo: {
        textAlign: 'left',
        marginVertical: StyleConfig.smartScale(5),
        fontSize: StyleConfig.countPixelRatio(13),

    },
    vForwardContainer: {
        justifyContent: 'center'
    }
});

export default styles