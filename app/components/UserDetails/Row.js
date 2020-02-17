import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

const Row = ({ label, body, actions = [] }) => {
    return (
        <View style = {styles.ActionsRow}>
        <View>
            <Text style = {styles.Title}>{label}</Text>
            <Text style = {styles.MainText}>{body}</Text>
        </View>
        <View style = {styles.IconContainer}>
           {actions.map((action, index) => (
                <TouchableOpacity
                    onPress = {action.onPress}
                    key = {index}
                >
                    <Icon
                        name = {action.icon}
                        size = {25}
                        style = {styles.Icon}
                    />
              </TouchableOpacity>
           ))}
        </View>
    </View>
    );
};

export default Row;