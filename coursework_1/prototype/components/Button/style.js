/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    button: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    darkButton: {
        backgroundColor: '#666666'
    },
    lightButton: {
        backgroundColor: '#F2F2F2'
    },
    text: {
        fontFamily: 'kiddish',
        textTransform: 'uppercase',
        fontSize: 22,
    },
    darkText: {
        color: '#F2F2F2'
    },
    lightText: {
        color: '#666666'
    }
});

export default styles;