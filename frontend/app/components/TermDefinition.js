import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

const InputField = ({ header, value }) => {
  const [focused, setFocused] = useState(false);
  const [input, setInput] = useState("");

  const handleInputChange = (text) => {
    setInput(text);
    if (!text) {
      setFocused(false);
    } else {
      setFocused(true);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.headerText}>{header}</Text>
      <TextInput
        onChangeText={handleInputChange}
        style={[
          styles.inputField,
          focused ? { borderBottomColor: "white" } : {},
        ]}
      >
        {value}
      </TextInput>
    </View>
  );
};

const TermDefinition = ({ termNumber, term, definition }) => {
  return (
    <View style={styles.termDefinitionContainer}>
      <Text style={styles.termNumber}>{termNumber} </Text>
      <View style={styles.inputContainer}>
        <InputField header="Term" value={term || ""} />
        <InputField header="Definition" value={definition || ""} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  termDefinitionContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    width: "90%",
    margin: 10,
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
    width: "95%",
    marginVertical: 5,
  },
  headerText: {
    fontSize: 14,
  },
});

export default TermDefinition;
