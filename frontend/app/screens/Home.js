import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TermDefinition from "../components/TermDefinition";

function Home(props) {
  return (
    <View style={styles.container}>
      <TermDefinition
        termNumber={1}
        term=""
        definition="hello"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1B",
    alignItems: "center",
    paddingTop: "25%",
  },
});
export default Home;
