/* Modules */
import React from 'react';
import { Text } from 'react-native';

class FontText extends React.Component {
    render() {
        return this.props.fontsLoaded ? <Text style={this.props.style}>{this.props.children}</Text> : null;
    }
}

export default FontText;