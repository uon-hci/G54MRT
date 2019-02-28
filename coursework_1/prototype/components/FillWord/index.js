/* Modules */
import React from 'react';
import { View, Text } from 'react-native';
import Letter from './Letter';

/* Style */
import styles from './style';

/**
 * Start button
 */
class FillWord extends React.Component {

    state = { attempt: 'totofesse' };

    scrambleWord = (word) => {
        return word.replace('-', '').split('').sort(() => 0.5 - Math.random());
    }

    mapAttempt = () => {
        const { word } = this.props;
        const { attempt } = this.state;
        let i = 0;
        return word.split('').map((letter, index) => {
            if (letter != '-') {
                return <Letter key={index} letter={attempt[i++]} />
            } else {
                return <Text key={index} style={styles.hyphen}>-</Text>
            }
        });
    }

    render() {
        const { word } = this.props;
        const scrambledLetters = this.scrambleWord(word);
        console.log(scrambledLetters)
        return (
            <View style={styles.container}>
                <View style={styles.attempt}>
                    { this.mapAttempt() }
                </View>
            </View>
        );
    }
};

export default FillWord;