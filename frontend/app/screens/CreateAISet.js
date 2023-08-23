import React, { useState } from "react";
import BackButton from "../components/BackButton";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function CreateAISet({ navigation }) {
  const [focused, setFocused] = useState(false);
  const [activeButton, setActiveButton] = useState("prompt");
  const [title, setTitle] = useState("");

  const handleTitleChange = (text) => {
    setTitle(text);
    if (!text) {
      setFocused(false);
    } else {
      setFocused(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === "prompt" ? styles.activeButton : {},
            ]}
            onPress={() => setActiveButton("prompt")}
          >
            {activeButton === "prompt" ? (
              <LinearGradient
                colors={["#007A66", "#00A196"]}
                style={styles.activeButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                angle={135}
              >
                <Text style={styles.buttonText}>Prompt Input</Text>
              </LinearGradient>
            ) : (
              <View
                style={{
                  backgroundColor: "#A7A7A7",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttonText}>Prompt Input</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              activeButton === "notes" ? styles.activeButton : {},
            ]}
            onPress={() => setActiveButton("notes")}
          >
            {activeButton === "notes" ? (
              <LinearGradient
                colors={["#007A66", "#00A196"]}
                style={styles.activeButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                angle={135}
              >
                <Text style={styles.buttonText}>Notes Input</Text>
              </LinearGradient>
            ) : (
              <View
                style={{
                  backgroundColor: "#A7A7A7",
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttonText}>Notes Input</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.description}>
          {activeButton === "prompt" ? (
            <Text style={styles.description}>
              Enter a topic, and we'll create flashcards for you
            </Text>
          ) : (
            <Text style={styles.description}>
              Got lecture notes? Paste them here, and we'll transform them into
              review-ready flashcards
            </Text>
          )}
        </View>
        {activeButton === "prompt" && (
          <TextInput
            style={styles.promptInput}
            placeholder="Enter topic..."
            placeholderTextColor="#B0B0B0"
            multiline={true}
          />
        )}
        {activeButton === "notes" && (
          <TextInput
            style={styles.notesInput}
            placeholder="Paste notes..."
            placeholderTextColor="#B0B0B0"
            multiline={true}
          />
        )}
        <View style={styles.createContainer}>
          <TouchableOpacity style={[styles.create]}>
            <LinearGradient
              colors={["#007A66", "#00A196"]}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              angle={135}
            >
              <Text style={styles.createText}>Create</Text>
            </LinearGradient>
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
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 30,
  },
  button: {
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  activeButtonGradient: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    color: "#F5FAFA",
    marginBottom: 5,
    alignItems: "flex-start",
    marginTop: 5,
    width: "90%",
  },
  promptInput: {
    backgroundColor: "#363636",
    width: "90%",
    height: "25%",
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "white",
    fontSize: 14,
  },
  notesInput: {
    backgroundColor: "#363636",
    width: "90%",
    height: "45%",
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "white",
    fontSize: 14,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
  },
  createContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  create: {
    padding: 15,
    borderRadius: 10,
    margin: 5,
    paddingVertical: 25,
    paddingHorizontal: 55,
  },
  createText: {
    color: "white",
    fontSize: 20,
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
});
export default CreateAISet;
