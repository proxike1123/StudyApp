import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    primaryButton: {
        backgroundColor: colors.link,
        borderColor: colors.boder,
        borderWidth: StyleSheet.hairlineWidth,
    },
    Label: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    }
});