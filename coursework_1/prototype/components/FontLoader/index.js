/* Modules */
import React from 'react';
import LoadingScreen from './LoadingScreen';
import { Font } from 'expo';

/**
 * Font loader
 */
class FontLoader extends React.Component {
    state = {
        fontsLoaded: false
    };
  
    async componentDidMount() {
        await Font.loadAsync({
          'touch_of_nature': require('../../assets/fonts/touch_of_nature.ttf'),
          'kiddish': require('../../assets/fonts/kiddish.ttf')
        });
        this.setState({ fontsLoaded: true });
    }

    render() {
        const { fontsLoaded } = this.state;
        if (fontsLoaded) {
            return this.props.children;
        } else {
            return <LoadingScreen />;
        }
    }
}

export default FontLoader;