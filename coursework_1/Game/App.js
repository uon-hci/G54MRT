/* Modules */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

/* Screens */
import Welcome from './screens/Welcome';
import Instructions from './screens/Instructions';

/* App navigator */
const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    Instructions
  }, 
  {
    initialRouteName: "Welcome"
  }
);

/* App container */
const AppContainer = createAppContainer(AppNavigator);

/**
 * App
 */
const App = () => {
  return (
    <AppContainer />
  );
};

export default App;