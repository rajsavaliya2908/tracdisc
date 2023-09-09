import { StyleSheet } from 'react-native'
import StyleConfig from '../../../../assets/StyleConfig';
import color from '../../../../utils/color';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: color.white,
    },
    iLoaction: {
        height: StyleConfig.smartScale(300),
        width: StyleConfig.smartWidthScale(250),
        resizeMode: 'contain',
    },
    toBack: {
        backgroundColor: color.primarycolor,
        paddingStart: StyleConfig.smartWidthScale(50),
        paddingTop: StyleConfig.smartScale(10),
        paddingBottom: StyleConfig.smartScale(10),
        borderRadius: 30,
        marginBottom: StyleConfig.smartScale(15),
        marginTop: StyleConfig.smartScale(30),
        paddingEnd: StyleConfig.smartWidthScale(50),
    },
    tUpdate: {
        marginStart: StyleConfig.smartWidthScale(30),
        color: color.black,
        marginTop: StyleConfig.smartScale(15),
        marginBottom: StyleConfig.smartScale(15),
        marginEnd: StyleConfig.smartWidthScale(30),
        textAlign: 'center',
        fontSize: StyleConfig.smartScale(15),
    },
    tUpdateDetail: {
        marginStart: StyleConfig.smartWidthScale(25),
        marginEnd: StyleConfig.smartWidthScale(25),
        textAlign: 'center',
        fontSize: StyleConfig.countPixelRatio(20),
    },
});

export default styles
