import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MySets from "../screens/MySets";
import CreateManualSet from "../screens/CreateManualSet";
import CreateAISet from "../screens/CreateAISet";

const Stack = createStackNavigator();

function SetNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MySets"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MySets" component={MySets} />
      <Stack.Screen name="CreateManualSet" component={CreateManualSet} />
      <Stack.Screen name="CreateAISet" component={CreateAISet} />
    </Stack.Navigator>
  );
}

export default SetNavigator;
