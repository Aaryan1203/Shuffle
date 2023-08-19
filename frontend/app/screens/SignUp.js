import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

function SignUp({ navigation }) {
  const [fadeAnim] = useState(new Animated.Value(0));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isButtonActive =
    email.length > 0 &&
    password.length > 0 &&
    repeatedPassword.length > 0 &&
    password === repeatedPassword;

  const handleSignUp = () => {
    if (isButtonActive) {
      navigation.reset({
        index: 0,
        routes: [{ name: "MainApp" }],
      });
    } else {
      const errorMsg =
        password !== repeatedPassword
          ? "Passwords do not match!"
          : "Please fill in all fields!";
      setErrorMessage(errorMsg);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }).start(() => {
            setErrorMessage("");
          });
        }, 1300);
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#00A196" />
        </TouchableOpacity>

        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.inputField}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.requirementsContainer}>
        <Text style={styles.passwordTitle}>Password must have:</Text>
        <Text style={styles.passwordRequirement}>• An uppercase letter</Text>
        <Text style={styles.passwordRequirement}>• A number</Text>
        <Text style={styles.passwordRequirement}>• A special character</Text>
      </View>
      <Text style={styles.label}>Repeat Password</Text>
      <TextInput
        style={styles.inputField}
        secureTextEntry={true}
        onChangeText={(text) => setRepeatedPassword(text)}
      />
      <Animated.Text style={{ ...styles.errorText, opacity: fadeAnim }}>
        {errorMessage}
      </Animated.Text>
      <TouchableOpacity
        style={{
          ...styles.signInContainer,
          backgroundColor: isButtonActive ? "#00A196" : "white",
        }}
        onPress={handleSignUp}
      >
        <Text
          style={{ ...styles.signIn, color: isButtonActive ? "black" : "grey" }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
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
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  backButton: {
    backgroundColor: "#F5FAFA",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    top: "-20%",
    left: "5%",
  },
  backButtonText: {
    color: "#00A196",
  },
  logo: {
    width: 170,
    height: 130,
    marginBottom: 40,
  },
  label: {
    color: "white",
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: 5,
    fontWeight: "bold",
  },
  requirementsContainer: {
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: 20,
  },
  passwordTitle: {
    color: "white",
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "bold",
    marginBottom: "3%",
  },
  passwordRequirement: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },
  inputField: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    color: "black",
    paddingLeft: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  signInContainer: {
    width: "50%",
    backgroundColor: "#F5FAFA",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: "20%",
  },
  signIn: {
    fontSize: 24,
    marginVertical: 10,
    color: "grey",
    textAlign: "center",
    paddingVertical: 5,
    alignItems: "center",
  },
  errorText: {
    color: "red",
    position: "absolute",
    bottom: "25%",
    alignSelf: "center",
  },
});

export default SignUp;
