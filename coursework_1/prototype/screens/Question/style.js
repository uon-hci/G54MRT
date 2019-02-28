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
        width: 200,
        height: 200,
        backgroundColor: '#666666',
        borderRadius: 100
    },
    question: {
        fontFamily: 'kiddish',
        color: '#666666',
        fontSize: 20
    },
    bottom: {
        flex: 1,
        borderTopColor: '#666666',
        borderTopWidth: 15,
        alignSelf: 'stretch'
    }
});

export default styles;