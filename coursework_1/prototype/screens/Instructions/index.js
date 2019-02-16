/* Modules */
import React from 'react';
import { View, Text, Button } from 'react-native';

/* Navigation */
import navigation from './navigation';

/* Style */
import styles from './style';

/**
 * Instructions
 */
class Instructions extends React.Component {
    static navigationOptions = navigation;
    render() {
        return(
            <View style={styles.container}>
                <Text>Instructions</Text>
                <Button
                    title="Go back!"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

export default Instructions;