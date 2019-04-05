import React, {Component} from 'react';
import {Button, ScrollView, TextInput, View,KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';
import {List, ListItem} from 'native-base';
import {styles} from './../Style';

import {Text} from 'react-native';
import {bindActionCreators} from "redux";
import {
    getAllChannel, sendMessage
} from "../actions/MessagesActions";


class AllChannel extends Component {

    initState = {
        message: ""
    }

    componentDidMount() {
        this.props.getAllChannel();
        this.setState(this.state)
    }

    send = () => {
        if (this.state.message != "") {
            this.props.sendMessage(this.state.message);
            this.setState({message: ""});
        }
    }

    render() {


        return (
            <KeyboardAvoidingView style={[styles.allChannelContainer]} behavior="padding" enabled>

                <ScrollView>
                    {this.props.allchannel.all.length > 0 && <List>
                        {this.props.allchannel.all.map((item) => {
                            return (
                                <ListItem key={item.key}>
                                    <Text>{item.message}</Text>
                                </ListItem>
                            )
                        })
                        }
                    </List>}
                    {(!this.props.allchannel.all || this.props.allchannel.all.length === 0) && <Text>No messages</Text>}
                </ScrollView>
                <View style={styles.messageView}>
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
