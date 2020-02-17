import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {capitalizeFirstLetter} from '../../helpers/string';
import styles, { ARROW_SIZE } from './styles';


const ListItem = ({ contact, onPress}) => {
    const name =`${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`
    const iconName = Platform.Os === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'
    return (
       <TouchableHighlight
            onPress = {onPress}    
        >
            <View style = {styles.row}>
                <Image
                    style = {styles.avatar}
                    source = {{ uri: contact.picture.thumbnail }}/>
                <View>
                    <Text style = {styles.name}>{name}</Text>
                    <Text style = {styles.email}>{contact.email}</Text>
                </View>
                <View style = {styles.arrowContainer}>
                    <Icon
                        name = {iconName}
                        size = {ARROW_SIZE}
                        style = {styles.arrowIcon}
                    />
                </View>
            </View>
       </TouchableHighlight>
    );
};
export default ListItem;