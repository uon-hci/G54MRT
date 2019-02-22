/* Modules */
import { StyleSheet } from 'react-native';

/* Stylesheet*/
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F2F2F2',
        borderBottomWidth: 0,
        shadowColor : '#F2F2F2',
        shadowOpacity: 0,
        shadowOffset: {
            height: 0,
        },
        elevation: 0,
        paddingTop: 50
    },
    headerTint: {
        color: '#666666'
    },
    headerTitle: {
        fontFamily: 'touch_of_nature',
        color: '#666666',
        fontSize: 25
    }
});

export default styles;