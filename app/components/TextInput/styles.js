import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/colors';

const window = Dimensions.get('window');

export default StyleSheet.create({
    Container: {
        marginLeft: 20,
        borderBottomColor: colors.boder,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 15
    },
    Input: {
        height: 40,
        width: window.width,
    }
});