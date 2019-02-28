/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    attempt: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '90%'
    },
    scramble: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '60%'
    },
    letterContainerAttempt: {
        width: 25,
        height: 25,
        borderRadius: 8,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#666666',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        marginRight: 1
    },
    letterContainerScramble: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#666666',
        color: '#F2F2F2',
        borderWidth: 3,
        borderColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1,
        marginRight: 1
    },
    letterAttempt: {
        fontWeight: 'bold',
        color: '#666666'
    },
    letterScramble: {
        fontWeight: 'bold',
        color: '#F2F2F2'
    },
    letterWon: {
        color: 'white'
    },
    containerWon: {
        backgroundColor: '#46AF64',
        borderColor: 'white'
    },
    hyphen: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#666666'
    }
});

export default styles;