import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function MySets(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Sets</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1B",
    paddingTop: "10%",
    paddingHorizontal: "5%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10%"
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  addButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 25,
  },
  addButtonText: {
    fontSize: 34,
    color: "#1A1A1B",
    paddingBottom: 4,
    paddingLeft: 1
  },
});
export default MySets;
