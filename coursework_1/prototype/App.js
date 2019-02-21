/* Modules */
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FontLoader from './components/FontLoader';

/* Screens */
import Welcome from "./screens/Welcome";
import Instructions from "./screens/Instructions";

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
class App extends React.Component {
  render() {
    return (
      <FontLoader>
        <AppContainer />
      </FontLoader>
    );
  }
};

export default App;
