/* Modules */
import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { Font } from 'expo';
import FontText from '../../components/FontText';
import StartButton from './StartButton';

/* Style */
import styles from './style';

/**
 * Welcome
 */
class Welcome extends React.Component {
    
    state = {
        fontsLoaded: false
    };

    /* TODO: move to Root component and use context */
    async componentDidMount() {
        await Font.loadAsync({
           'touch_of_nature': require('../../assets/fonts/touch_of_nature.ttf'),
           'kiddish': require('../../assets/fonts/kiddish.ttf')
        });
        this.setState({ fontsLoaded: true });
    }
    
    render() {
        const { fontsLoaded } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <FontText fontsLoaded={fontsLoaded} style={styles.title}>Earth Detectives</FontText>
                    <FontText fontsLoaded={fontsLoaded} style={styles.subtitle}>Who will be the best?</FontText>
                </View>
                <View style={styles.blank} />
                <ImageBackground source={require('./img/bottom.png')} resizeMode='stretch' style={styles.bottom}>
                    <View style={styles.dinoContainer}>
                        <Image style={styles.dino} resizeMode='contain' source={require('./img/dino.png')} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <FontText fontsLoaded={fontsLoaded} style={styles.description}>Learn and have fun with this interactive museum experience</FontText>
                    </View>
                    <View style={styles.buttonContainer}>
                        <StartButton fontsLoaded={fontsLoaded} />
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

export default Welcome;