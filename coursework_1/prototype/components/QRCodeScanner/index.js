/* Modules */
import React from 'react';
import Button from '../../components/Button';
import Scanner from './Scanner';
import { Permissions } from 'expo';
import { View } from 'react-native';

/* Style */
import styles from './style';

/**
 * QRCodeScanner
 */
class QRCodeScanner extends React.Component {
    state = { loading: false, started: false, cameraPermission: false };

    handleDetected = (data) => {
        this.setState({ started: false });
        if (data == this.props.answer) {
            this.props.onWin();
        } else {
            alert('Incorrect!');
        }
    }

    startScanner = async () => {
        this.setState({ loading: true });
        const { cameraPermission } = this.state;
        if (!cameraPermission) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            const granted = status === 'granted';
            this.setState({ cameraPermission: granted, started: granted, loading: false });
        } else {
            this.setState({ started: true, loading: false });
        }
    }

    render() {
        const { loading, started } = this.state;
        const buttonText = loading ? 'Loading..' : 'Scan QR code';
        const Content = () => started ? <Scanner handleDetected={this.handleDetected} /> : <Button text={buttonText} onPress={this.startScanner} />;
        return (
            <View style={styles.container}>
                <Content />
            </View>
        );
    }
}

export default QRCodeScanner;