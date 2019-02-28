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
        const { userData } = this.state;
        const { score } = userData;
        const levelsList = Object.keys(levels);
        const leftLevels = levelsList.filter((level, index) => index % 2 == 0);
        const rightLevels = levelsList.filter((level, index) => index % 2 != 0);
        return (
            <View style={styles.container}>
                <Text style={styles.score}><Text style={styles.bold}>{score}</Text> points</Text>
                <View style={styles.levels}>
                    <View style={[styles.levelColumn, styles.leftLevels]}>
                        { leftLevels.map(level => <Level key={level} 
                            navigation = {this.props.navigation}
                            name={level} 
                            userProgress={userData.levels[level].progress} 
                            locked={userData.levels[level].locked} />)}
                    </View>
                    <View style={[styles.levelColumn, styles.rightLevels]}>
                        { rightLevels.map(level => <Level key={level} 
                            navigation = {this.props.navigation}
                            name={level} 
                            userProgress={userData.levels[level].progress} 
                            locked={userData.levels[level].locked}/>)}
                    </View>
                </View>
            </View>
        );
    }
}

export default Overview;