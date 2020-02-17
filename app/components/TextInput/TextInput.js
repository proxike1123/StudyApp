import React, { Component } from 'react';
import styles from './styles';
import { View, TextInput } from 'react-native';

class CustomTextInput extends Component{

    focus = () => {
        this._input.focus();
    }
    render () {
        return (
            <View style = {styles.Container}>
                <TextInput
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.Input}
                    ref = {(input) => this._input = input}
                    {...this.props}
                />
            </View>
        );
    }
};

export default CustomTextInput;