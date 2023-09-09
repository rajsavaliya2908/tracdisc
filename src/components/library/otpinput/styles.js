import { StyleSheet } from 'react-native';
import StyleConfig from '../../../assets/StyleConfig';


const styles = StyleSheet.create({
    defaultTextFieldStyle: {
        width: StyleConfig.countPixelRatio(50),
        height: StyleConfig.countPixelRatio(50),
        borderColor: 'rgba(226, 226, 226, 1)',
        borderWidth: StyleConfig.countPixelRatio(2),
        borderRadius: StyleConfig.countPixelRatio(2),
        textAlign: 'center',
        color: 'rgba(226, 226, 226, 1)',
    },
    tDash: {
        marginHorizontal: StyleConfig.smartWidthScale(10)
    },
    vInputContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;