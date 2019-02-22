/* Modules */
import React from "react";
import FontLoader from './components/FontLoader';
import AppContainer from './AppContainer';

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
