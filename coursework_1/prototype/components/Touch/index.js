/* Modules */
import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

/**
 * Touch wrapper
 */
class Touch extends React.Component {
    render() {
        const { onPress, children } = this.props;
        return (
            <TouchableNativeFeedback onPress={onPress}>
                <View>
                    {children}
                </View>
            </TouchableNativeFeedback>
        );
    }
};

export default Touch;