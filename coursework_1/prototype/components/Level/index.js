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
        console.log('going level', this.props.name);
    }
    
    render() {
        const { name, userProgress } = this.props;
        const level = levels[name];
        const progress = userProgress / level.total * 100;
        return (
            <Touch onPress={this.goLevel}>
                <View style={styles.container}>
                    <View style={[styles.picture, { backgroundColor: level.color }]}>
                        <Image style={styles.icon} resizeMode='contain' source={requireLevelIcon(name)} />
                    </View>
                    <Text style={styles.name}>{this.capitalize(level.name)}</Text>
                    <Text style={styles.progress}>{progress}%</Text>
                </View>
            </Touch>
        );
    }
};

export default Level;