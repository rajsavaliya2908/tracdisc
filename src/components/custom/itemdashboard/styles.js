import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    pContainer: {
        backgroundColor: color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        paddingHorizontal: StyleConfig.smartWidthScale(10),
        paddingVertical: StyleConfig.smartScale(10),
        marginVertical: StyleConfig.smartScale(8),
        marginHorizontal: StyleConfig.smartWidthScale(20),
        borderRadius: StyleConfig.countPixelRatio(10)
    },
    vRowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tTitle: {
        flex: 1,
        textAlign: 'left',
        marginHorizontal: StyleConfig.smartWidthScale(10),
        color: color.black_dull,
        fontSize: StyleConfig.countPixelRatio(20)
    },
    iIcon: {
        marginHorizontal: StyleConfig.smartWidthScale(5)
    }
});

export default styles