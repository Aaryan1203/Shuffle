import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back" size={24} color="#00A196" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#F5FAFA",
    padding: 10,
    borderRadius: 10,
    // Remove position and top attributes
    // position: "absolute",
    // top: "-20%",
    left: "5%",
    },
});

export default BackButton;
