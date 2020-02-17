import {StyleSheet} from 'react-native';
import colors from '../../config/colors'

export const ARROW_SIZE = 25;
export default StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
        flex: 1
    },
    name: {
        fontWeight: 'bold',
        color: colors.mainText,
        fontSize: 16
    },
    email: {
        color: colors.subText,
        fontSize: 13
    },
    arrowContainer: {
        flex: 1,
    },
    arrowIcon: {
        color: colors.subText,
        alignSelf: 'flex-end'
    }
});