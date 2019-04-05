import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'
import {APP_CONFIG} from './../APP_CONFIG'
import {styles} from "../Style";

firebase.initializeApp(APP_CONFIG);

export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user)
            {
                this.props.navigation.navigate('Main')
            }else
            {
                this.props.navigation.navigate('Login')
            }
        })
    }

    render() {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

