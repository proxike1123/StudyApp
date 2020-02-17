import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const DrawerButton = ({navigation}) => {
    return (
        <TouchableOpacity 
            onPress = {() => navigation.openDrawer()}
            style = {styles.drawerButtonContainer}
         >
            <Icon name = 'md-menu' size = {22}/>
        </TouchableOpacity>
    );
};

export default DrawerButton;