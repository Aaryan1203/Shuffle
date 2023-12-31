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

function MySetsStack() {
  return (
    <Stack.Navigator
      initialRouteName="MySets"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MySets" component={MySets} />
      <Stack.Screen name="SetScreen" component={SetScreen} />
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

function FlashcardsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Flashcards" component={Flashcards} />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      presentation="modal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MySetsRoot" component={MySetsStack} />
      <Stack.Screen
        name="CreateManualSetRoot"
        component={CreateManualSetStack}
      />
      <Stack.Screen name="CreateAISetRoot" component={CreateAISetStack} />
      <Stack.Screen name="Flashcards" component={FlashcardsStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
