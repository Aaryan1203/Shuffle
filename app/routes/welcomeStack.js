import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';

const screens = {
    Welcome: {
        screen: WelcomeScreen
    },
    SignIn: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    }
}

const homeStack = createStackNavigator(screens);

