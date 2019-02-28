/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#BEE6F6',
        flex: 1
    },
    top: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'touch_of_nature',
        fontSize: 45,
        textAlign: 'center',
        color: '#666666'
    },
    subtitle: {
        fontFamily: 'kiddish',
        color: '#666666',
        fontSize: 25
    },
    blank: {
        flex: 1
    },
    dinoContainer: {
        position: 'absolute',
        top: -125,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dino: {
        height: 135
    },
    bottom: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 50
    },
    description: {
        textAlign: 'center',
        fontFamily: 'kiddish',
        fontSize: 25,
        color: '#F2F2F2',
        maxWidth: 230
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default styles;