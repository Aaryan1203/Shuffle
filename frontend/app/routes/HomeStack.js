import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MySets from "../screens/MySets";
import CreateManualSet from "../screens/CreateManualSet";
import CreateAISet from "../screens/CreateAISet";
import TabNavigation from "./TabNavigation";
import SetScreen from "../screens/SetScreen";
import Flashcards from "../screens/Flashcards";
import Home from "../screens/Home";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function CreateManualSetStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CreateManualSet" component={CreateManualSet} />
    </Stack.Navigator>
  );
}

function CreateAISetStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CreateAISet" component={CreateAISet} />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      presentation="modal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeStack} />
      <Stack.Screen
        name="CreateManualSet"
        component={CreateManualSetStack}
      />
      <Stack.Screen name="CreateAISet" component={CreateAISetStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
