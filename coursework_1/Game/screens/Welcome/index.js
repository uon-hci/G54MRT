import React from 'react';
import { View, Text, Button } from 'react-native';

const Welcome = (props) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome!</Text>
            <Button
                title="Go to Instructions"
                onPress={() => props.navigation.navigate('Instructions')}
            />
        </View>
    );
}

export default Welcome;