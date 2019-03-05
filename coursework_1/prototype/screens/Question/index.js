/* Modules */
import React from 'react';
import { View, Text, Image } from 'react-native';
import FillWord from '../../components/FillWord'
import storage from '../storage';
import { requireQuestionImage } from '../../game/levels';

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
        const level = storage.getLevel(levelName);
        const question = this.props.navigation.getParam('question');
        const image = requireQuestionImage(question.image);
        return (
            <View style={styles.container}>
                <Text style={styles.progress}>Question {question.id}</Text>
                <View style={styles.top}>
                    <Image style={styles.picture} resizeMode='cover' source={image} />
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