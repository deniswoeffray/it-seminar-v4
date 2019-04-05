// Main.js

import React from 'react'
import { StyleSheet, Platform, Button, Text, View } from 'react-native'
import firebase from 'firebase'
import Params from "./Params";
import {
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import AllChannel from './AllChannel';


const BottomNavigator = createBottomTabNavigator({
    "Messages": AllChannel,
    "Params": Params,
}, {
    initialRouteName: 'Messages',
},
);

const AppContainer = createAppContainer(BottomNavigator);


export default class Main extends React.Component {



    render() {
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