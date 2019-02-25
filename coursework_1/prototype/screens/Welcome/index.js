/* Modules */
import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import Button from '../../components/Button';

/* Style */
import styles from './style';

/**
 * Welcome
 */
class Welcome extends React.Component {
    toInstructions = () => {
        this.props.navigation.navigate('Instructions');
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>Earth Detectives</Text>
                    <Text style={styles.subtitle}>Who will be the best?</Text>
                </View>
                <View style={styles.blank} />
                <ImageBackground source={require('../../assets/images/bottom.png')} resizeMode='stretch' style={styles.bottom}>
                    <View style={styles.dinoContainer}>
                        <Image style={styles.dino} resizeMode='contain' source={require('../../assets/images/dino.png')} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Learn and have fun with this interactive museum experience</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button text='START' color='light' onPress={this.toInstructions} />
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

export default Welcome;