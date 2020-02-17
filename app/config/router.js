import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact'
import {capitalizeFirstLetter} from '../helpers/string';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer';
import {DrawerButton} from '../components/Header';

const ContactsStack = createStackNavigator(
    {
        Contacts: {
            screen: Contacts,
            navigationOptions: (props) => ({
                title: 'Contacts',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: Platform.OS === 'ios' ? null : <DrawerButton {...props}/>
            }),
        },
        Details: {
            screen: Details,
            navigationOptions: ({navigation}) => ({
                title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }),
            
        },
    },
    {
        initialRouteName: 'Contacts',
    }
);

const NewContactStack = createStackNavigator(
    {
        NewContacts: {
            screen: NewContact,
            navigationOptions: (props) => ({
                title: 'New Contact',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: Platform.OS === 'ios' ? null : <DrawerButton {...props}/>
            }),
        }
    },
    {
        initialRouteName: 'NewContacts'
    }
);

const MeStack = createStackNavigator(
    {
        Me: {
            screen: Me,
            navigationOptions: (props) => ({
                title: 'Me',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: Platform.OS === 'ios' ? null : <DrawerButton {...props}/>
            }),
        }
    },
    {
        initialRouteName: 'Me'
    }
);

const Drawer = createDrawerNavigator(
    {
        Contacts: {
            screen: ContactsStack,
            navigationOptions: {
                drawerLabel: 'Contacts'
            }
        },
        NewContact: {
            screen: NewContactStack,
            navigationOptions: {
                drawerLabel: 'New Contact'
            }
        },
        Me: {
            screen: MeStack,
            navigationOptions: {
                drawerLabel: 'Me'
            }
        }
    },
    {
        initialRouteName: 'Contacts',
    }
);

const Tabs = createMaterialBottomTabNavigator(
    {
        Contacts: {
            screen: ContactsStack,
            navigationOptions: {
                tabBarLabel: 'CONTACTS',
                tabBarIcon: <Icon name = 'ios-list' size = {25} color = 'white'/>,
                tabBarColor: 'red'
            }
        },
        NewContact: {
            screen: NewContactStack,
            navigationOptions: {
                tabBarLabel: 'NEW CONTACT',
                tabBarIcon: () => <Icon name = 'ios-add' size = {25} color = 'white'/>,
                barStyle: {backgroundColor: 'green'}
            }
        },
        Me: {
            screen: MeStack,
            navigationOptions: {
                tabBarLabel: 'ME',
                tabBarIcon: () => <Icon name = 'ios-contact' size = {25} color = 'white'/>,
                barStyle: {backgroundColor: 'brown'}
            }
        }
    },
    {
        initialRouteName: 'Contacts',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    }
);

export default  ContactsContainer = createAppContainer(Platform.OS ===  'ios' ? Tabs : Drawer);