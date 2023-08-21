import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "./BackButton";
import { TextInput } from "react-native";

const InputField = ({ header, value }) => {
  return (
    <View style={style.inputContainer}>
      <Text style={style.headerText}>{header}</Text>
      <TextInput style={style.inputField}>{value}</TextInput>
    </View>
  );
};

const TermDefinition = ({ termNumber, term, definition }) => {
  return (
    <View style={style.termDefinitionContainer}>
      <Text style={style.termNumber}>{termNumber} </Text>
      <View style={style.inputContainer}>
        <InputField header="Term" value={term || ""} />
        <InputField header="Definition" value={definition || ""} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  termDefinitionContainer: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: "90%",
  },
  termNumber: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: "column",
    width: "95%",
  },
  inputField: {
    borderBottomWidth: 3,
    borderBottomColor: "#A7A7A7",
    height: 30,
    width: "100%",
  },
  headerText: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default TermDefinition;
