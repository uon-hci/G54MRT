/* Modules */
import { createStackNavigator, createAppContainer } from "react-navigation";

/* Screens */
import Welcome from "./screens/Welcome";
import Instructions from "./screens/Instructions";
import Overview from "./screens/Overview";
import Question from "./screens/Question";
import CorrectAnswer from "./screens/CorrectAnswer";

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
        Overview,
        Question,
        CorrectAnswer: {
            screen: CorrectAnswer,
            navigationOptions: {
                header: null
            }
        }
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