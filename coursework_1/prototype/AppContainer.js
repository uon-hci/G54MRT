/* Modules */
import { createStackNavigator, createAppContainer } from "react-navigation";

/* Screens */
import Welcome from "./screens/Welcome";
import Instructions from "./screens/Instructions";
import Overview from "./screens/Overview";

/* Navigator */
const Navigator = createStackNavigator(
    {
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                header: null
            }
        },
        Instructions,
        Overview
    }, 
    {
        initialRouteName: 'Welcome',
        headerLayoutPreset: 'center',
        headerMode: 'screen'
    }
);

/* App container */
const AppContainer = createAppContainer(Navigator);

export default AppContainer;