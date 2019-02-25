/* Modules */
import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

/**
 * Touch wrapper
 */
class Touch extends React.Component {
    render() {
        const { onPress, children } = this.props;
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

export default Touch;