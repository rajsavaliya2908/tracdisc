import { StyleSheet } from 'react-native';
import StyleConfig from '../assets/StyleConfig';
import color from './color';


const CS = StyleSheet.create({
    containerBlock: {
        flex: 1,
    },
    safeAreaContainer: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        backgroundColor: color.white
    },
    safeArea: {
        flex: 1,
        backgroundColor: color.white
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCenterStretch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    rowCenterContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowSpaceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerSpaceBlock: {
        flex: 1,
        justifyContent: 'space-between',
    },
    containerBlockStetch: {
        flex: 1,
        alignItems: 'stretch',
    },
    textPrimaryBold: {
        color: color.primarycolor,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontBold,
    },
    textPrimaryRegular: {
        color: color.primarycolor,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontRegular,
    },
    textPrimarySemibold: {
        color: color.primarycolor,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontSemibold,
    },
    textPrimaryLight: {
        color: color.primarycolor,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontLight,
    },
    textBlackBold: {
        color: color.black,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontBold,
    },

    textBlackRegular: {
        color: color.black,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontRegular,
    },
    textBlackSemibold: {
        color: color.black,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontSemibold,
    },
    textBlackLight: {
        color: color.black,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontLight,
    },
    textWhiteBold: {
        color: color.white,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontBold,
    },
    textWhiteRegular: {
        color: color.white,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontRegular,
    },

    textWhiteSemibold: {
        color: color.white,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontSemibold,
    },
    textWhiteLight: {
        color: color.white,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontLight,
    },
    textDarkBlueBold: {
        color: color.dark_blue,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontBold,
    },
    textDarkBlueRegular: {
        color: color.dark_blue,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontRegular,
    },

    textDarkBlueSemibold: {
        color: color.dark_blue,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontSemibold,
    },
    textDarkBlueLight: {
        color: color.dark_blue,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontLight,
    },
    textLightBlackBold: {
        color: color.light_black,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontBold,
    },
    textLightBlackRegular: {
        color: color.light_black,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontRegular,
    },

    textLightBlackSemibold: {
        color: color.light_black,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontSemibold,
    },
    textLightBlackLight: {
        color: color.light_black,
        fontSize: StyleConfig.countPixelRatio(18),
        textAlign: 'center',
        fontFamily: StyleConfig.fontLight,
    },

});

export default CS;
