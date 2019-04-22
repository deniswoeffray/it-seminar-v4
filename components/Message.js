import React, {Component} from 'react';
import {styles} from "../Style";
import {Text} from "react-native";
import moment from "moment";
import {ListItem} from "native-base";
import * as firebase from "firebase";

class Message extends Component {
    render() {
        let mine = this.props.item.senderId == firebase.auth().currentUser.uid
        return (
            <ListItem key={this.props.item.key} style={[styles.p05, styles.listItem,  mine ? styles.mine : styles.their ]}>

                <Text>{this.props.item.senderId == firebase.auth().currentUser.uid}</Text>

                <Text style={[mine ? styles.mineContrast : styles.theirContrast, styles.bold]}>{this.props.item.senderName}</Text>
                <Text style={styles.white}>{this.props.item.message}</Text>
                <Text style={[mine ? styles.mineContrast : styles.theirContrast, styles.small,{textAlign: 'right'}]}>{moment.unix(this.props.item.timestamp).format("DD/MM/YYYY HH:mm:ss")}</Text>
            </ListItem>
        );
    }
}

export default Message;