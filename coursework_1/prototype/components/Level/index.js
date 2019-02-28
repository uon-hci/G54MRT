/* Modules */
import React from 'react';
import { View, Text, Image } from 'react-native';
import Touch from '../Touch';
import { levels, requireLevelIcon } from '../../game/levels';

/* Style */
import styles from './style';

/**
 * Start button
 */
class Level extends React.Component {

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    goLevel = () => {
        if (!this.props.locked) {
            this.props.navigation.navigate('Question', { level: this.props.name });
        }
    }
    
    render() {
        const { name, userProgress , locked } = this.props;
        const level = levels[name];
        const color = locked ? '#CCCCCC' : level.color;
        const icon = locked ? requireLevelIcon('locked') : requireLevelIcon(name);
        const progress = userProgress / level.total * 100;
        const Progress = () => locked ? <Text style={styles.locked}>LOCKED</Text> : <Text style={styles.progress}>{progress}%</Text>;
        return (
            <Touch onPress={this.goLevel}>
                <View style={styles.container}>
                    <View style={[styles.picture, { backgroundColor: color }]}>
                        <Image style={[styles.icon, locked && styles.iconLocked]} resizeMode='contain' source={icon} />
                    </View>
                    <Text style={[styles.name, locked && styles.nameLocked]}>{this.capitalize(level.name)}</Text>
                    <Progress />
                </View>
            </Touch>
        );
    }
};

export default Level;