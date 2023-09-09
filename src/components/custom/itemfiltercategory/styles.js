import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';

const styles = StyleSheet.create({
    vTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: StyleConfig.smartWidthScale(15),
        marginVertical: StyleConfig.smartScale(5)
    },
    tReset: {
        textAlign: 'left',
        paddingVertical: StyleConfig.smartScale(5)
    },
    tTitle: {
        color: color.primarygrey,
        textAlign: 'left',
        flex: 1,
        paddingVertical: StyleConfig.smartScale(5)
    },
    vMainContainer: {
        marginVertical: StyleConfig.smartScale(10)
    }
});

export default styles