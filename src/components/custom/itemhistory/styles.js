import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    pContainer: {
        borderRadius: StyleConfig.countPixelRatio(10),
        paddingHorizontal: StyleConfig.smartWidthScale(8),
        paddingVertical: StyleConfig.smartScale(8),
        flexDirection: 'row',
        backgroundColor: color.white,
        marginVertical: StyleConfig.smartScale(5),
        marginHorizontal: StyleConfig.smartWidthScale(15),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    iIcon: {
        marginHorizontal: StyleConfig.smartWidthScale(5),
        marginVertical: StyleConfig.smartScale(5),
    },
    vDetailContainer: {
        flex: 1,
        marginHorizontal: StyleConfig.smartWidthScale(5)
    },
    tLocation: {
        color: color.black_dull,
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(18),
        marginVertical: StyleConfig.smartScale(2)
    },
    tTime: {
        color: color.black_dull,
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(15),
        marginVertical: StyleConfig.smartScale(2)
    },
    tLocationTypeInfo: {
        color: color.primarygrey,
        flex: 1,
        textAlign: 'left',
        fontSize: StyleConfig.countPixelRatio(15),
        marginVertical: StyleConfig.smartScale(5),
    },
    vLocationTypeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles