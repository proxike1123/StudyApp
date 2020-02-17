import React, {Component} from 'react';
import { View } from 'react-native';
import { TextInput } from '../components/TextInput'
import { PrimaryButton } from '../components/Buttons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const fields = [
    { placeholder: 'First Name', stateKey: 'firstName'},
    { placeholder: 'Last Name', stateKey: 'lastName'},
    { placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address'},
    { placeholder: 'Mobile Phone', stateKey: 'mobilePhone'},
    { placeholder: 'Home Phone', stateKey: 'homePhone'},
    { placeholder: 'City', stateKey: 'city'},
    { placeholder: 'Birthday', stateKey: 'birthday'},
    { placeholder: 'Registered', stateKey: 'registered'},
    { placeholder: 'Username', stateKey: 'username'},
];

class NewContact extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    onInputchange = ( text, stateKey ) => {
        const mod = {};
        mod[stateKey] = text;
        this.setState(mod);
    }

    handleSubmit(index, override = false) {
        if (index === fields.length - 1 || override) {
            alert('Submit');
        }
            else {
                const nextField = fields[index + 1];
                this[nextField.stateKey].focus();
            }
    };

    render() {
        return (
            <KeyboardAwareScrollView>
                {
                    fields.map((field, index) => (
                        <TextInput
                            key = {field.stateKey}
                            onChangeText = { (text) => this.onInputchange( text, field.stateKey)}
                            returnKeyType = {index === fields.length - 1 ? 'done' : 'next'}
                            onSubmitEditing = { () => this.handleSubmit(index)}
                            ref = { (input) => this[field.stateKey] = input}
                            {...field}
                        />
                    ))
                }
                <View style = {{ marginTop: 20}}>
                    <PrimaryButton
                        label = 'Save'
                        onPress = { () =>this.handleSubmit( 0, true)}
                    />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
export default NewContact;