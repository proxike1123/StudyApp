import React, { Component } from 'react';
import { FlatList } from 'react-native';
import  { contacts } from '../config/data';
import { ListItem } from '../components/ListItem';


class Contacts extends Component {
    handleRowPress  (item)  {
        return this.props.navigation.navigate('Details', item);
    }
    render() {
        return (
                <FlatList
                    style = {{flex: 1}}
                    data = {contacts}
                    keyExtractor = {item => item.email}
                    renderItem = {({item}) =>
                        <ListItem contact = {item} onPress = {() => this.handleRowPress(item)}/>
                    }/>
        )
    }
}
export default Contacts;