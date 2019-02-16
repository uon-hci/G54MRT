/* Modules */
import React from 'react';
import { View, Image } from 'react-native';

/* Style */
import styles from './style';

/**
 * 
 * @param {object} props 
 */
class Welcome extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.top}></View>
                <View style={styles.bottom}>
                    <Image style={styles.bump} resizeMode='contain' source={require('./img/bump.png')} />
                </View>
            </View>
        );
    }
}

export default Welcome;