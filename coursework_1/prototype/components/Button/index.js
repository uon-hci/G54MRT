/* Modules */
import React from 'react';
import { View, Text } from 'react-native';
import Touch from '../Touch';

/* Style */
import styles from './style';

/**
 * Start button
 */
class Button extends React.Component {
    render() {
        const { text, color, onPress } = this.props;
        const buttonColor = color == 'dark' ? styles.darkButton : styles.lightButton;
        const textColor = color == 'dark' ? styles.darkText : styles.lightText;
        return (
            <Touch onPress={onPress}>
                <View style={[styles.button, buttonColor]}>
                    <Text style={[styles.text, textColor]}>{text}</Text>
                </View>
            </Touch>
        );
    }
};

export default Button;