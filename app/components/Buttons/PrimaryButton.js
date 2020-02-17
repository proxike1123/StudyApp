import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const PrimaryButton = ({ label, onPress }) => {
    return  (
        <View style = {styles.Container}>
            <TouchableOpacity
                onPress = {onPress}
                style = {styles.primaryButton}
            >
                <Text style = {styles.Label}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PrimaryButton;