import React, {Component} from 'react';
import {Button, ScrollView, TextInput, View, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';
import {List, ListItem} from 'native-base';
import {styles} from './../Style';

import {Text} from 'react-native';
import {bindActionCreators} from "redux";
import {
    getAllChannel, sendMessage
} from "../actions/MessagesActions";
import moment from "moment";
import Message from "./Message";


class AllChannel extends Component {

    initState = {
        message: ""
    }

    constructor(props) {
        super(props);
        this.state = this.initState;
    }

    componentDidMount() {
        this.props.getAllChannel();
    }

    send = () => {
        if (this.state.message !== "") {
            this.props.sendMessage(this.state.message);
            this.setState({message: ""});
        }
    };

    render() {
        return (
            <KeyboardAvoidingView style={[styles.allChannelContainer]} behavior="padding" enabled>
                <ScrollView style={[styles.m0]}>
                    {this.props.allchannel.all.length > 0 &&
                    <List style={[styles.m1]}>
                        {this.props.allchannel.all.map((item) => {
                            return (
                                <Message item={item}/>
                            )
                        })
                        }
                    </List>}
                    {(!this.props.allchannel.all || this.props.allchannel.all.length === 0) && <Text>No messages</Text>}
                </ScrollView>
                <View style={[styles.messageView, styles.p1]}>
                    <TextInput style={{flex: 1}}
                               placeholder="Message..."
                               onChangeText={message => this.setState({message})}
                               value={this.state.message}
                    />
                    <Button style={{flex: 1}} title={"Send"} onPress={this.send}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => {
    return {allchannel: state.allchannel}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllChannel,
        sendMessage
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllChannel);
