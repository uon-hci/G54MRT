/* Modules */
import React from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import initialUserData from '../../game/initialUserData';
import Level from '../../components/Level';
import { levels } from '../../game/levels';

/* Navigation */
import myNavigation from '../navigation';

/* Style */
import styles from './style';

/**
 * Overview
 */
class Overview extends React.Component {
    state = { userData: initialUserData };
    static navigationOptions = ({ navigation }) => myNavigation(navigation.getParam('username'));

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
        const { score } = this.state.userData;
        const levelsList = Object.keys(levels);
        return (
            <View style={styles.container}>
                <Text style={styles.score}><Text style={styles.bold}>{score}</Text> points</Text>
                <View style={styles.levels}>
                    { levelsList.map(level => <Level key={level} name={level} userProgress={this.state.userData.levels[level].progress} />)}
                </View>
            </View>
        );
    }
}

export default Overview;