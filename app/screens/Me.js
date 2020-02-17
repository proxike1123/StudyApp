import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { me } from '../config/data';
import { Header, Actions, Info } from '../components/UserDetails';
import { PrimaryButton } from '../components/Buttons';

class Me extends Component {
    render() {
        return (
            <ScrollView>
                <Header item = {me}/>
                <PrimaryButton onPress = {() => null} label = 'Edit Profile'/>
                <Actions item = {me}/>
                <Info item = {me}/>
            </ScrollView>
        )
    }
}
export default Me;