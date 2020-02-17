import React from 'react';
import { View, Text, Platform,TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'
import {toPhoneNumber} from '../../helpers/string'
import Row from './Row'

const Actions = ({item}) => {
    const emailIcon = Platform.OS === 'ios' ? 'ios-mail' : 'md-mail';
    const phoneIcon = Platform.OS === 'ios' ? 'ios-call' : 'md-call';
    const textIcon = Platform.Os === 'ios' ? 'ios-text' : 'md-text';
    return (
        <View style = {styles.ActionsContainer}>
            <Row
                label = 'email'
                body = {item.email}
                actions= {[
                    {
                        onPress: () => null,
                        icon: emailIcon,
                    }
                ]}
            />
            <Row
                label = 'cell'
                body = {toPhoneNumber(item.cell)}
                actions= {[
                    {
                        onPress: () => null,
                        icon: phoneIcon,
                    },
                    {
                        onPress: () => null,
                        icon: textIcon
                    }
                ]}
            />  
            <Row
                label = 'home'
                body = {toPhoneNumber(item.phone)}
                actions = {[
                    {
                        onPress: () => null,
                        icon: phoneIcon,
                    }
                ]}
            />
        </View>
    );
};

export default Actions;
