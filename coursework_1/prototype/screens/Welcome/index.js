/* Modules */
import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import Touch from '../../components/Touch';
import StartButton from './StartButton';

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
                <ImageBackground source={require('./img/bottom.png')} resizeMode='stretch' style={styles.bottom}>
                    <View style={styles.dinoContainer}>
                        <Image style={styles.dino} resizeMode='contain' source={require('./img/dino.png')} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Learn and have fun with this interactive museum experience</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Touch onPress={this.toInstructions}>
                            <StartButton />
                        </Touch>
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

export default Welcome;