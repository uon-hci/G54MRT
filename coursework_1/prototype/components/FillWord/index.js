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

    constructor(props) {
        super(props);
        word = this.replaceAll(this.props.word, '-', '');
        word = this.replaceAll(word, ' ', '');
        this.state = { attempt: [], scramble: this.scrambleWord(word), won: false, word };
    }

    replaceAll = (str, find, replace) => {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    componentWillReceiveProps(nextProps) {
        word = this.replaceAll(nextProps.word, '-', '');
        word = this.replaceAll(word, ' ', '');
        this.setState({ scramble: this.scrambleWord(word), word });
    }

    scrambleWord = (word) => {
        if (parseInt(word)) {
            word += '1234567890'
        }
        return word.split('').sort(() => 0.5 - Math.random());
    }

    isWon = () => {
        const { word } = this.state;
        const attempt = this.state.attempt.join('');
        return word == attempt;
    }

    handleAttemptTouch = (index) => {
        let { attempt, scramble } = this.state;
        if (index < attempt.length) {
            const letter = attempt[index];
            const emptySlot = scramble.indexOf('');
            scramble[emptySlot] = letter;
            attempt.splice(index, 1);
            this.setState({ attempt });
        }
    }
    
    handleScrambleTouch = (index) => {
        let { attempt, scramble } = this.state;
        attempt.push(scramble[index]);
        scramble[index] = '';
        this.setState({ attempt, scramble, won: this.isWon() });
        if (this.isWon()) {
            setTimeout(() => {
                this.setState({ attempt: [], won: false });
                this.props.onWin();
            }, 500);
        }
    }

    mapAttempt = () => {
        const { word } = this.props;
        const { attempt, won } = this.state;
        let i = 0;
        return word.split('').map((letter, index) => {
            switch (letter) {
                case '-':
                    return <Text key={index} style={styles.hyphen}>-</Text>;
                case ' ':
                    return <Text key={index} style={styles.hyphen}> </Text>;
                default: 
                    return <Letter type='attempt' handleAttemptTouch={this.handleAttemptTouch} index={i} key={index} letter={attempt[i++]} won={won} />;
            }
        });
    }

    mapScramble = () => {
        const { scramble } = this.state;
        return scramble.map((letter, index) => {
                return <Letter type='scramble' handleScrambleTouch={this.handleScrambleTouch} index={index} key={index} letter={letter} />;
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.attempt}>
                    { this.mapAttempt() }
                </View>
                <View style={styles.scramble}>
                    { this.mapScramble() }
                </View>
            </View>
        );
    }
};

export default FillWord;