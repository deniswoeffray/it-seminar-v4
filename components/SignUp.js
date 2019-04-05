import React from 'react'
import {Text, TextInput, View, Button } from 'react-native'
import  firebase from 'firebase'
import {styles} from './../Style';

export default class SignUp extends React.Component {
    state = { email: '', password: '', password2:'', errorMessage: null, firstname:"", lastname: "", uid:"" }

    handleSignUp = () => {
        if(this.state.password === this.state.password2)
        {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    const uid = firebase.auth().currentUser.uid;
                    let user = {firstname:this.state.firstname,lastname:this.state.lastname};
                    firebase.database().ref().child('users').child(uid).set(user).then(()=>{
                        this.props.navigation.navigate('Main')})
                })
                .catch(error => this.setState({ errorMessage: error.message }))
        }
        else
        {
            this.setState({ errorMessage: "Les mots de passe ne correspondent pas" })
        }
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>Create new account</Text>
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    placeholder="Firstname"
                    onChangeText={firstname => this.setState({ firstname })}
                    value={this.state.firstname}
                />
                <TextInput
                    placeholder="Lastname"
                    onChangeText={lastname => this.setState({ lastname })}
                    value={this.state.lastname}
                />
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Repeat Password"
                    autoCapitalize="none"
                    onChangeText={password2 => this.setState({ password2 })}
                    value={this.state.password2}
                />
                <Button style={{marginTop:8,marginBottom:8}} title="Create account" onPress={this.handleSignUp} />
                <Button
                    title="Already have an account? Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}
