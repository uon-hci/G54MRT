/* Modules */
import React from 'react';
import { BarCodeScanner } from 'expo';

/* Style */
import styles from './style';

/**
 * Scanner
 */
class Scanner extends React.Component {

    handleBarCodeScanned = ({ type, data }) => {
        if (type == 256) {
            this.props.handleDetected(data);
        }
    }

    render() {
        return (
            <BarCodeScanner onBarCodeScanned={this.handleBarCodeScanned} style={styles.scanner} />
        );
    }
}

export default Scanner;