/* Modules */
import React from 'react';
import { View, Text, Image } from 'react-native';
import Touch from '../Touch';

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

    click = (e) => {
        const { letter } = this.props;
        if (letter && letter != '') {
            if (this.props.type == 'attempt') {
                this.props.handleAttemptTouch(this.props.index);
            } else {
                this.props.handleScrambleTouch(this.props.index);
            }
        }
    }
    
    render() {
        const { letter, type, won } = this.props;
        const containerStyle = type == 'attempt' ? [styles.letterContainerAttempt, won && styles.containerWon] : styles.letterContainerScramble;
        const letterStyle = type == 'attempt' ? [styles.letterAttempt, won && styles.letterWon] : styles.letterScramble;
        return (
            <Touch onPress={this.click}>
                <View style={containerStyle}>
                    <Text style={letterStyle}>{this.format(letter)}</Text>
                </View>
            </Touch>
        );
    }
};

export default Letter;