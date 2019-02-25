/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1
    },
    score: {
        flex: 1,
        textAlign: 'center',
        paddingTop: 5,
        color: '#46AF64'
    },
    bold: {
        fontWeight: 'bold'
    },
    levels: {
        flex: 20,
        flexDirection: 'row'
    },
    levelColumn: {
        alignItems: 'center'
    },
    leftLevels: {
        flex: 1
    },
    rightLevels: {
        paddingTop: 80,
        flex: 1
    }
});

export default styles;