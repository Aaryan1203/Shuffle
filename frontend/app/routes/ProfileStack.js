import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MySets from "../screens/MySets";
import CreateManualSet from "../screens/CreateManualSet";
import CreateAISet from "../screens/CreateAISet";
import TabNavigation from "./TabNavigation";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}


function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}


function RootStack() {
  return (
    <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileRoot" component={ProfileStack} />
      <Stack.Screen name="CreateSettingsRoot" component={SettingsStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
