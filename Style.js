import {StyleSheet} from "react-native";
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
    mainContainer: {
        marginTop: getStatusBarHeight(),
        marginLeft: 15,
        marginRight: 15,
    },
    allChannelContainer: {
        marginTop: getStatusBarHeight(),
        marginLeft: 15,
        marginRight: 15,
        flex: 1
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageView:
        {
            elevation: 5,
            flexDirection:"row",
            paddingTop: 20,
            paddingBottom: 20
        }

});