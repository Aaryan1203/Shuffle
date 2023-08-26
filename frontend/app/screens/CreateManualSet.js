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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import TermDefinition from "../components/TermDefinition";
import BackButton from "../components/BackButton";
import Set from "../components/Set";
import SafetyScreen from "../components/SafetyScreen";

function CreateManualSet({ navigation }) {
  const [focused, setFocused] = useState(false);
  const [title, setTitle] = useState("");
  const [termDefinitions, setTermDefinitions] = useState([1]);
  const [showSafetyScreen, setShowSafetyScreen] = useState(false);

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

  const hasFilledFields = () => {
    return title !== "";
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showSafetyScreen && (
          <SafetyScreen
            message="Are you sure you want to leave this page?"
            subMessage="Changes will not be saved"
            onStay={() => setShowSafetyScreen(false)}
            onLeave={navigation.goBack}
            exitText="Discard"
            stayText="Stay"
          />
        )}
        <View style={styles.topContainer}>
          <BackButton
            onPress={() => {
              if (hasFilledFields()) {
                setShowSafetyScreen(true);
              } else {
                navigation.goBack();
              }
            }}
            navigation={navigation}
          />
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
          <TouchableOpacity
            style={styles.addButton}
            onPress={addTermDefinition}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1B",
    alignItems: "center",
    paddingTop: "20%",
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
    margin: 10,
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
  },
});
export default CreateManualSet;
