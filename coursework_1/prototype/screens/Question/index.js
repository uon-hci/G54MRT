/* Modules */
import React from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import Button from '../../components/Button';
import initialUserData from '../../game/initialUserData';
import { levels } from '../../game/levels';
import FillWord from '../../components/FillWord'

/* Navigation */
import myNavigation from '../navigation';

/* Style */
import styles from './style';

/**
 * Question
 */
class Question extends React.Component {
    state = { userData: initialUserData };
    static navigationOptions = ({ navigation }) => myNavigation(navigation.getParam('level'));

    async componentDidMount() {
        try {
            const username = await AsyncStorage.getItem('currentUsername');
            const userData = await AsyncStorage.getItem(username);
            this.setState({ userData: JSON.parse(userData) });
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        const levelName = this.props.navigation.getParam('level');
        const userProgress = this.state.userData.levels[levelName].progress;
        const level = levels[levelName];
        const levelQuestion = level.questions[userProgress];
        const question = levelQuestion.question;
        const answer = levelQuestion.answer;
        return (
            <View style={styles.container}>
                <Text style={styles.progress}>Question {userProgress + 1}</Text>
                <View style={styles.top}>
                    <View style={styles.picture} />
                    <Text style={styles.question}>{question}</Text>
                </View>
                <View style={[styles.bottom, { backgroundColor: level.color }]}>
                    <FillWord word={answer} />
                </View>
            </View>
        );
    }
}

export default Question;