/* Modules */
import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import FontText from '../../../components/FontText';

/* Style */
import styles from './style';

/**
 * Start button
 */
class StartButton extends React.Component {
    render() {
        return (
            <View style={styles.button}>
                <FontText fontsLoaded={this.props.fontsLoaded} style={styles.buttonText}>START</FontText>
            </View>
        );
    }
};

export default StartButton;