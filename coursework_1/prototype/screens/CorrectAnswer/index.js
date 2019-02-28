/* Modules */
import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import storage from '../storage';

/* Navigation */
import navigation from '../navigation';

/* Style */
import styles from './style';

/**
 * CorrectAnswer
 */
class CorrectAnswer extends React.Component {
    state = { wonPoints: 0 };
    static navigationOptions = navigation('answer');

    async componentDidMount() {
        const levelName = this.props.navigation.getParam('level');
        try {
            const wonPoints = await storage.addCorrectAnswer(levelName);
            this.setState({ wonPoints });
        } catch(err) {
            console.log(err);
        }
    }

    toOverview = async () => {
        const levelName = this.props.navigation.getParam('level');
        // this.props.navigation.navigate('Overview');
        const progress = await storage.getUserProgress(levelName);
        const question = storage.getQuestion(levelName, progress);
        this.props.navigation.navigate('Question', { level: levelName, question: question });
    }

    render() {
        const { wonPoints } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Correct!</Text>
                <Text style={styles.points}>+{ wonPoints } points</Text>
                <Button onPress={this.toOverview} color='dark' text=' CONTINUE ' />
            </View>
        );
    }
}

export default CorrectAnswer;