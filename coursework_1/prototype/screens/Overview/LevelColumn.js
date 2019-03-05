/* Modules */
import React from 'react';
import Level from '../../components/Level';
import { View } from 'react-native';

/* Style */
import styles from './style';

/**
 * Overview
 */
class LevelColumn extends React.Component {
    render() {
        const { levels, type, userData, toQuestion } = this.props;
        const columnStyle = type == 'left' ? styles.leftLevels : styles.rightLevels;
        return(
            <View style={[styles.levelColumn, columnStyle]}>
                { levels.map(level => <Level key={level} 
                    name={level} 
                    userProgress={userData.levels[level].progress} 
                    locked={userData.levels[level].locked} 
                    complete={userData.levels[level].complete} 
                    toLevel={toQuestion} />)}
            </View>
        );
    }
}

export default LevelColumn;