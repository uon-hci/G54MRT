/* Modules */
import React from 'react';
import { View, Text, Button } from 'react-native';

/* Navigation */
import navigation from '../navigation';

/* Style */
import styles from './style';

/**
 * Instructions
 */
class Instructions extends React.Component {
    static navigationOptions = navigation('Instructions');
    render() {
        return(
            <View style={styles.container}>
            </View>
        );
    }
}

export default Instructions;