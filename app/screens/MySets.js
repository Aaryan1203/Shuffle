import React from "react";
import { Text, View, StyleSheet } from "react-native";

function MySets(props) {
  return (
    <View style={styles.container}>
      <Text>My Sets</Text>
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
export default MySets;
