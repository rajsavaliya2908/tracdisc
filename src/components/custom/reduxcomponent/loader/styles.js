import { Platform, StyleSheet, StatusBar } from 'react-native'
import StyleConfig from '../../../../assets/StyleConfig';
import color from '../../../../utils/color';


const styles = StyleSheet.create({
    vContainer: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: color.white,
        height: StyleConfig.height,
        justifyContent: 'center',
        flex: 1,
    },
});

export default styles