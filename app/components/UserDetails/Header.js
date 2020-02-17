import React from 'react';
import { View, Text, Image } from 'react-native';
import { capitalizeFirstLetter } from '../../helpers/string';
import styles from './styles';

const Header = ({item}) => {
    return (
        <View style = {styles.AvatarContainer}>
            <Image
                style = {styles.AvatarDetails}
                source = {{ uri: item.picture.large}}
            />
            <Text style = {styles.AvatarName}>{capitalizeFirstLetter(item.name.first)} {capitalizeFirstLetter(item.name.last)}</Text>
        </View>
    );
};
export default Header;
