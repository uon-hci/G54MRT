/* Modules */
import { createStackNavigator, createAppContainer } from "react-navigation";

/* Screens */
import Welcome from "./screens/Welcome";
import Instructions from "./screens/Instructions";

/* Navigator */
const Navigator = createStackNavigator(
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
        initialRouteName: 'Welcome',
        headerLayoutPreset: 'center',
        headerMode: 'screen'
    }
);

/* App container */
const AppContainer = createAppContainer(Navigator);

export default AppContainer;