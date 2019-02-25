/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    picture: {
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center'
    },
    icon: {
        height: 80
    },
    name: {
        paddingTop: 10,
        fontWeight: 'bold',
        color: '#666666',
        fontSize: 18
    },
    progress: {
        fontWeight: 'bold',
        color: '#46AF64'
    }
});

export default styles;