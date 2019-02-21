/* Modules */
import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';

/* Style */
import styles from './style';

/**
 * Start button
 */
class StartButton extends React.Component {
    render() {
        return (
            <View style={styles.button}>
                <Text style={styles.buttonText}>START</Text>
            </View>
        );
    }
};

export default StartButton;