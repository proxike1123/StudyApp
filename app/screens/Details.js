import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import {Header, Actions, Info} from '../components/UserDetails';

class Details extends Component {
    render() {
        const item = this.props.navigation.state.params;
        return (
         <ScrollView>
             <Header item = {item}/>
             <Actions item = {item}/>
             <Info item = {item}/>
         </ScrollView>
        )
    }
}
export default Details;