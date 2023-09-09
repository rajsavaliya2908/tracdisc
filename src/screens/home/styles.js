import { StyleSheet } from 'react-native'
import StyleConfig from '../../assets/StyleConfig';
import color from '../../utils/color';

const styles = StyleSheet.create({
    vContainer: {
        flex: 1,
        backgroundColor: color.white
    },
    vDetailContainer: {
        flex: 1,
        backgroundColor: color.white
    },
    vMainContainer: {
        flex: 1,
        backgroundColor: color.white
    },
    tVersion: {
        marginBottom: StyleConfig.smartScale(30),
        marginTop: StyleConfig.smartScale(10),
        fontSize: StyleConfig.countPixelRatio(16)
    },
    vContainer: {
        flex: 1
    },
    flContainer: {
        paddingVertical: StyleConfig.smartScale(10)
    },
    flMain: {
        marginVertical: StyleConfig.smartScale(10)
    },
    iIcon: {
        marginVertical: StyleConfig.smartScale(10),
        alignSelf: 'center'
    }
});

export default styles