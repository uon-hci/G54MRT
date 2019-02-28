/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    attempt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    letterContainer: {
        width: 25,
        height: 25,
        borderRadius: 8,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#666666',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        marginRight: 1,
    },
    letter: {
        fontWeight: 'bold',
        color: '#666666'
    },
    hyphen: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#666666'
    }
});

export default styles;