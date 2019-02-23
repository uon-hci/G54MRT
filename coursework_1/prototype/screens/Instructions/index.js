/* Modules */
import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../../components/Button';

/* Navigation */
import navigation from '../navigation';

/* Style */
import styles from './style';

/**
 * Instructions
 */
class Instructions extends React.Component {
    static navigationOptions = navigation('Instructions');
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.castleContainer}>
                        <Image style={styles.castle} resizeMode='contain' source={require('./img/WollatonHall.png')} />
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.instruction}>The employees of the Wollaton Hall Museum are in desperate need of your help! Can you 
                        identify the different animals, insects, plants and rocks? Investigate through the museum to discover
                        all the missing information and learn incredible facts about the history of life on earth. Can you become
                        the best dective? You have TWO HOURS!
                    </Text>
                    <Button text='START INVESTIGATING' color='dark' onPress={() => {}} />
                </View>
            </View>
        );
    }
}

export default Instructions;