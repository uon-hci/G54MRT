/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        flex: 1
    },
    progress: {
        color: '#46AF64',
        fontWeight: 'bold'
    },
    top: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    picture: {
        width: 195,
        height: 195,
        backgroundColor: '#666666',
        borderRadius: 100,
        borderColor: '#666666',
        borderWidth: 5
    },
    question: {
        fontFamily: 'kiddish',
        color: '#666666',
        fontSize: 20,
        maxWidth: '80%',
        textAlign: 'center'
    },
    bottom: {
        flex: 1,
        borderTopColor: '#666666',
        borderTopWidth: 15,
        alignSelf: 'stretch'
    }
});

export default styles;