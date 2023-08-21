import React from "react";
import Navigator from "./app/routes/HomeNavigation";
import WelcomeScreen from "./app/screens/Welcome";
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import { SafeAreaView } from "react-native";
import TermDefinition from "./app/components/TermDefinition";
import BottomTabNavigator from "./app/routes/TabNavigation";

export default function App() {
  return <Navigator />;
}
