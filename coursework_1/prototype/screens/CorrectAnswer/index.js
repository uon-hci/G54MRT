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
    state = { wonPoints: 0, complete: false };
    static navigationOptions = navigation('answer');

    async componentDidMount() {
        const levelName = this.props.navigation.getParam('level');
        const { wonPoints, newProgress } = await storage.addCorrectAnswer(levelName);
        const level = storage.getLevel(levelName);
        let complete = false;
        if (level.total == newProgress) {
            complete = true;
            await storage.completeLevel(levelName);
        }
        this.setState({ wonPoints, complete });
    }

    toOverview = () => {
        this.props.navigation.navigate('Overview');
    }

    toNextQuestion = async () => {
        const levelName = this.props.navigation.getParam('level');
        const progress = await storage.getUserProgress(levelName);
        const question = storage.getQuestion(levelName, progress);
        this.props.navigation.navigate('Question', { level: levelName, question: question });
    }

    render() {
        const levelName = this.props.navigation.getParam('level');
        const { wonPoints, complete } = this.state;
        const CompleteText = () => complete ? <Text style={styles.message}>{levelName} level complete!</Text> : null;
        const navigate = complete ? this.toOverview : this.toNextQuestion;
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Correct!</Text>
                <Text style={styles.points}>+{ wonPoints } points</Text>
                <CompleteText />
                <Button onPress={navigate} color='dark' text=' CONTINUE ' />
            </View>
        );
    }
}

export default CorrectAnswer;