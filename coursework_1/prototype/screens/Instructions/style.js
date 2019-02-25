/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1
    },
    top: {
        flex: 3
    },
    bottom: {
        borderTopWidth: 20,
        borderTopColor: '#666666',
        flex: 7,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    castleContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    castle: {
        height: 180
    },
    instruction: {
        fontFamily: 'kiddish',
        color: '#666666',
        fontSize: 23,
        maxWidth: 350,
        textAlign: 'center'
    },
    usernameInput: {
        borderBottomColor: '#666666',
        borderBottomWidth: 2,
        width: 200,
        textAlign: 'center'
    }
});

export default styles;