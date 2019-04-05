import React, {Component} from 'react';
import {Button, Text, ScrollView} from 'react-native';
import firebase from "firebase";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {styles} from './../Style';


class Params extends Component {

    constructor(props)
    {
        super(props);
        console.log(getStatusBarHeight());

    }

    logout = () => {
        firebase.auth().signOut().then(()=>{
            this.props.navigation.navigate('Login')
        })
    };

    render() {
        return (
            <ScrollView style={styles.mainContainer}>
                <Text>My user UID : {firebase.auth().currentUser.uid}</Text>
                <Button title={"Logout"} onPress={this.logout}/>
            </ScrollView>
        )
    }

}

export default Params;
