/* Modules */
import React from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import FillWord from '../../components/FillWord'
import storage from '../storage';

/* Navigation */
import myNavigation from '../navigation';

/* Style */
import styles from './style';

/**
 * Question
 */
class Question extends React.Component {
    static navigationOptions = ({ navigation }) => myNavigation(navigation.getParam('level'));

    toCorrectAnswer = () => {
        const levelName = this.props.navigation.getParam('level');
        const { points } = this.props.navigation.getParam('question');
        this.props.navigation.navigate('CorrectAnswer', { level: levelName, points: points });
    }

    render() {
        const levelName = this.props.navigation.getParam('level');
        const question = this.props.navigation.getParam('question');
        const level = storage.getLevel(levelName);
        return (
            <View style={styles.container}>
                <Text style={styles.progress}>Question {question.id}</Text>
                <View style={styles.top}>
                    <View style={styles.picture} />
                    <Text style={styles.question}>{question.question}</Text>
                </View>
                <View style={[styles.bottom, { backgroundColor: level.color }]}>
                    <FillWord word={question.answer} onWin={this.toCorrectAnswer} />
                </View>
            </View>
        );
    }
}

export default Question;