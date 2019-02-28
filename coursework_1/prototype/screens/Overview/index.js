/* Modules */
import React from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import initialUserData from '../../game/initialUserData';
import Level from '../../components/Level';
import { levels } from '../../game/levels';
import storage from '../storage';

/* Navigation */
import navigation from '../navigation';

/* Style */
import styles from './style';

/**
 * Overview
 */
class Overview extends React.Component {
    static navigationOptions = navigation('levels');

    constructor(props) {
        super(props);
        this.state = { userData: initialUserData };
        this.reRender = this.props.navigation.addListener('willFocus', () => {
            this.updateUserData();
        });
    }

    componentDidMount() {
        this.reRender;
    }

    updateUserData = async () => {
        try {
            const userData = await storage.getUserData();
            this.setState({ userData });
        } catch(err) {
            console.log(err);
        }
    }

    toQuestion = async (levelName) => {
        const progress = await storage.getUserProgress(levelName);
        const question = storage.getQuestion(levelName, progress);
        this.props.navigation.navigate('Question', { level: levelName, question: question });
    }

    render() {
        const { userData } = this.state;
        const { score } = userData;
        const levelsList = Object.keys(levels);
        const leftLevels = levelsList.filter((level, index) => index % 2 == 0);
        const rightLevels = levelsList.filter((level, index) => index % 2 != 0);
        return (
            <View style={styles.container}>
                <Text style={styles.score}><Text style={styles.bold}>{score}</Text> points</Text>
                <View style={styles.levels}>
                    {/* TODO: 1 component LevelColumn */}
                    <View style={[styles.levelColumn, styles.leftLevels]}>
                        { leftLevels.map(level => <Level key={level} 
                            navigation = {this.props.navigation}
                            name={level} 
                            userProgress={userData.levels[level].progress} 
                            locked={userData.levels[level].locked} 
                            toLevel={this.toQuestion} />)}
                    </View>
                    <View style={[styles.levelColumn, styles.rightLevels]}>
                        { rightLevels.map(level => <Level key={level} 
                            navigation = {this.props.navigation}
                            name={level} 
                            userProgress={userData.levels[level].progress} 
                            locked={userData.levels[level].locked}
                            toLevel={this.toQuestion} />)}
                    </View>
                </View>
            </View>
        );
    }
}

export default Overview;