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
        this.state = { attempt: [], scramble: this.scrambleWord(props.word), won: false };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ scramble: this.scrambleWord(nextProps.word) });
    }

    scrambleWord = (word) => {
        return word.replace('-', '').split('').sort(() => 0.5 - Math.random());
    }

    isWon = () => {
        const word = this.props.word.replace('-', '');
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
            if (letter != '-') {
                return <Letter type='attempt' handleAttemptTouch={this.handleAttemptTouch} index={i} key={index} letter={attempt[i++]} won={won} />
            } else {
                return <Text key={index} style={styles.hyphen}>-</Text>
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
                <View style={styles.attempt}>
                    { this.mapScramble() }
                </View>
            </View>
        );
    }
};

export default FillWord;