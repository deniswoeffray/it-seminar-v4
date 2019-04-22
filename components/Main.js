// Main.js

import React from 'react'
import { StyleSheet } from 'react-native'
import Params from "./Params";
import {
    createBottomTabNavigator,
    createAppContainer, createStackNavigator
} from "react-navigation";
import AllChannel from './AllChannel';
import {SplashScreen} from "expo";
import TabBarIcon from "./TabBarIcon";
import { Platform } from 'react-native';



AllChannel.navigationOptions = {
    tabBarLabel: 'Messages',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={'ios-chatbubbles'}
        />
    ),
};


Params.navigationOptions = {
    tabBarLabel: 'Params',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
        />
    ),
};


const BottomNavigator = createBottomTabNavigator({
    AllChannel,
    Params
    }
);

const AppContainer = createAppContainer(BottomNavigator);


export default class Main extends React.Component {



    render() {
        SplashScreen.hide();
        return (
            <AppContainer/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})