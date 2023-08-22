import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import TermDefinition from "../components/TermDefinition";
import BackButton from "../components/BackButton";
import Set from "../components/Set";

function CreateManualSet({ navigation }) {
  const [focused, setFocused] = useState(false);
  const [title, setTitle] = useState("");
  const [termDefinitions, setTermDefinitions] = useState([1]);

  const handleTitleChange = (text) => {
    setTitle(text);
    if (!text) {
      setFocused(false);
    } else {
      setFocused(true);
    }
  };
  const scrollViewRef = useRef();

  const addTermDefinition = () => {
    setTermDefinitions([...termDefinitions, termDefinitions.length + 1]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.topContainer}>
        <BackButton navigation={navigation} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Title</Text>
          <TextInput
            onChangeText={handleTitleChange}
            style={[
              styles.inputField,
              focused ? { borderBottomColor: "white" } : {},
            ]}
          ></TextInput>
        </View>
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={{ alignItems: "center" }}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {termDefinitions.map((num, index) => (
          <TermDefinition key={index} termNumber={num} />
        ))}
      </ScrollView>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={addTermDefinition}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1B",
    alignItems: "center",
    paddingTop: "15%",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingLeft: "5%",
  },
  titleContainer: {
    marginHorizontal: 20,
    flexDirection: "column",
    width: "75%",
  },
  inputField: {
    borderBottomWidth: 3,
    borderBottomColor: "#A7A7A7",
    height: 30,
    width: "100%",
    marginVertical: 5,
    color: "white",
    fontSize: 20,
  },
  titleText: {
    fontSize: 16,
    color: "white",
  },
  scrollView: {
    marginTop: 10,
    width: "100%",
  },
  addButton: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  addButtonText: {
    fontSize: 30,
    color: "#00A196",
    paddingBottom: 3,
    paddingLeft: 1,
  },
  addButtonContainer: {
    width: "100%",
    backgroundColor: "#CFD3D9",
    alignItems: "center",
    justifyContent: "center",

  }
});
export default CreateManualSet;
