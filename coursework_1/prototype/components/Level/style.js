/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 30
    },
    picture: {
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 70,
        width: 90
    },
    iconLocked: {
        height: 50
    },
    name: {
        paddingTop: 10,
        fontWeight: 'bold',
        color: '#666666',
        fontSize: 18
    },
    nameLocked: {
        color: '#CCCCCC'
    },
    progress: {
        fontWeight: 'bold',
        color: '#46AF64'
    },
    locked: {
        fontWeight: 'bold',
        color: '#CCCCCC'
    }
});

export default styles;