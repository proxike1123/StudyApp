import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/colors';

const window = Dimensions.get('window')

export default StyleSheet.create({
    AvatarDetails: {
        height: window.width / 2,
        width: window.width / 2,
        borderRadius: window.width / 4
    },
    Container: {
        flex: 1,
        backgroundColor: colors.BackgroundDetail
    },
    AvatarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.BackgroundAvatar,
        paddingVertical: 15
    },
    AvatarName: {
        fontSize: 25,
        color: colors.nameText
    },
    ActionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ActionsContainer: {
        backgroundColor: colors.graybackground,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.boeder,
        borderTopColor: colors.border,
    },
    MainText: {
        fontSize: 16,
        color: colors.mainText,
    },
    Title: {
        color: colors.subText,
        fontSize: 12
    },
    Icon: {
        color: colors.link,
        marginLeft: 13
    },
    IconContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    InfoContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15
    }
});

