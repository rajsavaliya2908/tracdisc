import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';
const styles = StyleSheet.create({
    vContainer: {
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: StyleConfig.countPixelRatio(10),
        backgroundColor: color.white,

        marginVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        paddingHorizontal: StyleConfig.smartWidthScale(10),
        paddingVertical: StyleConfig.smartScale(15)
    },
    vDetailContainer: {
        flex: 1,
        marginHorizontal: StyleConfig.smartWidthScale(10)
    },
    iIcon: {
        marginHorizontal: StyleConfig.smartWidthScale(10)
    },
    tSetCoordinate: {
        textAlign: 'left',
        color: color.primarygrey,
        marginVertical: StyleConfig.smartScale(2),
        fontSize: StyleConfig.countPixelRatio(14)
    },
    tCoordinate: {
        marginVertical: StyleConfig.smartScale(2),
        fontSize: StyleConfig.countPixelRatio(19),
        color: color.black_dull,
        textAlign: 'left'
    },
    tNewCoordinate: {
        textAlign: 'left',
        marginVertical: StyleConfig.smartScale(2),
        marginTop: StyleConfig.smartScale(10),
        fontSize: StyleConfig.countPixelRatio(18)
    },
    tLocation: {
        textAlign: 'left',
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(14)
    }
});

export default styles