/* Modules */
import React from 'react';
import { Text } from 'react-native';

/* Style */
import styles from './navigationStyle';

/* Navigation */
const navigation = (title) => () => ({
    headerStyle: styles.header,
    headerTintColor: styles.headerTint.color,
    headerTitle: <Text style={styles.headerTitle}>{title}</Text>
});

export default navigation;