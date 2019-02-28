/* Modules */
import React from 'react';
import { View, Text, Image } from 'react-native';

/* Style */
import styles from './style';

/**
 * Start button
 */
class Letter extends React.Component {
    format = (letter) => {
        if (letter) {
            return letter.toUpperCase();
        } else {
            return '';
        }
    }
    render() {
        const { letter } = this.props;
        return (
            <View style={styles.letterContainer}>
                <Text style={styles.letter}>{this.format(letter)}</Text>
            </View>
        );
    }
};

export default Letter;