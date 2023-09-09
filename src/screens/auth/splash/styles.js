import { StyleSheet } from 'react-native'
import StyleConfig from '../../../assets/StyleConfig';
import color from '../../../utils/color';


const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        backgroundColor: color.light_blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vContainer: {
        flex: 1,
        backgroundColor: color.light_blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tVersion: {
        opacity: 0.7,
        marginVertical: StyleConfig.smartScale(10),
        fontSize: StyleConfig.countPixelRatio(17)
    }
});

export default styles