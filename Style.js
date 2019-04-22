import {StyleSheet} from "react-native";
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
        p1: {

            paddingLeft: 15,
            paddingRight: 15
        },
        p05: {

            paddingLeft: 7,
            paddingRight: 7
        },
        m1: {

            marginLeft: 15,
            marginRight: 15
        },
        my05: {

            marginLeft: 7,
            marginRight: 7
        },
        m0: {
            marginLeft: 0,
            marginRight: 0
        },
        mainContainer: {
            marginTop: getStatusBarHeight(),
            marginLeft: 15,
            marginRight: 15,
        },
        allChannelContainer: {
            marginTop: getStatusBarHeight(),
            marginLeft: 0,
            marginRight: 0,
            flex: 1
        },
        loader: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        login: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        messageView:
            {
                elevation: 5,
                flexDirection: "row",
                paddingTop: 20,
                paddingBottom: 20
            },
        listItem: {
            margin: 7,
            flex: 1,
            color: "white",

            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            borderRadius: 5,
        },
        small: {
            fontSize: 13
        },
        bold: {
            fontWeight: "bold"
        },
        white: {
            color: "white",
        },
        mine: {
            backgroundColor: "#f29913",
            marginLeft: 100,
            marginRight: 0
        },
        mineContrast: {
            color: "#f0dba5",

        },
        their: {
            backgroundColor: "#3498db",
            marginLeft: 0,
            marginRight: 100


        },
        theirContrast: {
            color: "#cae6fa",
        },
        verticalSpace1:
            {
                marginTop: 7,
                marginBottom: 7,
            }

    }
);