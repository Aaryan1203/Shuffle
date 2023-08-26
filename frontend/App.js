import React from "react";
import Navigator from "./app/routes/WelcomeStack";
import WelcomeScreen from "./app/screens/Welcome";
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import { SafeAreaView } from "react-native";
import TermDefinition from "./app/components/TermDefinition";
import BottomTabNavigator from "./app/routes/TabNavigation";
import Flashcards from "./app/screens/Flashcards";

export default function App() {
  return <Navigator />;
}
