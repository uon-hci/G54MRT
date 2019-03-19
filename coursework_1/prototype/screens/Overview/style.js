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
        color: '#46AF64'
    },
    bold: {
        fontWeight: 'bold'
    },
    levels: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5
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
    },
    scrollContainer: {
        flex: 20,
        paddingTop: 20
    },
    scroll: {
        flex: 1
    }
});

export default styles;