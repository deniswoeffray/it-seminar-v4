import React from 'react'
import { Text, TextInput, View, Button } from 'react-native'
import  firebase from 'firebase'
import {styles} from "../Style";

export default class Login extends React.Component {
    state = { email: '', password: '', errorMessage: null }
    handleLogin = () => {
        const that = this;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(function(error) {
            that.setState({"errorMessage":error.message});
        });
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={[styles.verticalSpace1]} >Login</Text>
                {this.state.errorMessage &&
                <Text style={[{ color: 'red' }, styles.verticalSpace1]}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput style={[styles.verticalSpace1]}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput style={[styles.verticalSpace1]}
                    secureTextEntry
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Text style={styles.verticalSpace1}/>

                <Button style={[styles.verticalSpace1]} title="Login" onPress={this.handleLogin} />
                <Text style={styles.verticalSpace1}/>
                <Button style={[styles.verticalSpace1]}
                    title="Don't have an account? Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </View>
        )
    }
}