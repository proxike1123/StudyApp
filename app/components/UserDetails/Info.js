import React from 'react';
import {View, Text} from 'react-native';
import styles from  './styles'
import moment from 'moment';
import Row from './Row';
import {capitalizeFirstLetter} from '../../helpers/string';

const Info = ({item}) => {
    return (
        <View style = {styles.InfoContainer}>
            <Row
                label = 'city'
                body = {capitalizeFirstLetter(item.location.city)}
            />
            <Row
                label = 'birthday'
                body = {moment(item.dob).format('MMMM Do, YYYY')}
            />
             <Row
                label = 'registered'
                body = {moment(item.registered).format('MMMM Do, YYYY')}
            />
            <Row
                label = 'username'
                body = {item.login.username}
            />
        </View>
    );
};

export default Info;