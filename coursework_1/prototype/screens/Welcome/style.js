/* Modules */
import { StyleSheet, Dimensions } from 'react-native';

/* Screen dimension */
const screen = Dimensions.get('window');

/* Stylesheet*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#BEE6F6',
        flex: 1,
        justifyContent: 'flex-end'
    },
    top: {
        flex: 5
    },
    bump: {
        position: 'absolute',
        top: -150,
        width: screen.width
    },
    bottom: {
        backgroundColor: '#4D4D4D',
        flex: 2
    }

});

export default styles;