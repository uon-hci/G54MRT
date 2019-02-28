/* Modules */
import React from 'react';
import { View, Text, Image, TextInput, AsyncStorage } from 'react-native';
import Button from '../../components/Button';
import initialUserData from '../../game/initialUserData';
import storage from '../storage';

/* Navigation */
import navigation from '../navigation';

/* Style */
import styles from './style';

/**
 * Instructions
 */
class Instructions extends React.Component {

    static navigationOptions = navigation('instructions');
    state = { username: '' };

    toGame = async () => {
        const username = this.state.username;
        if (username.length > 2 && username.length < 15) {
            try {
                await storage.newUser(username);
                this.props.navigation.navigate('Overview');
            } catch (err) {
                console.log(err);
            }
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.castleContainer}>
                        <Image style={styles.castle} resizeMode='contain' source={require('../../assets/images/wollaton-hall.png')} />
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.instruction}>The employees of the Wollaton Hall Museum are in desperate need of your help! Can you 
                        identify the different animals, insects, plants and rocks? Investigate through the museum to discover
                        all the missing information and learn incredible facts about the history of life on earth. Can you become
                        the best dective?
                    </Text>
                    <TextInput style={styles.usernameInput} placeholder='Username' onChangeText={(username) => this.setState({ username })} />
                    <Button text='START INVESTIGATING' color='dark' onPress={this.toGame} />
                </View>
            </View>
        );
    }
}

export default Instructions;