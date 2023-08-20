import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Animated,
} from "react-native";
import React, { useState } from "react";
import BackButton from "../components/BackButton";

function SignIn({ navigation }) {
  const [fadeAnim] = useState(new Animated.Value(0));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isButtonActive = email.length > 0 && password.length > 0;

  const handleSignIn = () => {
    if (isButtonActive) {
      navigation.reset({
        index: 0,
        routes: [{ name: "MainApp" }],
      });
    } else {
      const errorMsg = "Please fill in all fields!";
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
        <BackButton navigation={navigation} />
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
      <Animated.Text style={{ ...styles.errorText, opacity: fadeAnim }}>
        {errorMessage}
      </Animated.Text>
      <TouchableOpacity
        style={{
          ...styles.signInContainer,
          backgroundColor: isButtonActive ? "#00A196" : "white",
        }}
        onPress={handleSignIn}
      >
        <Text
          style={{ ...styles.signIn, color: isButtonActive ? "black" : "grey" }}
        >
          Sign In
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
  logo: {
    width: 170,
    height: 130,
    marginBottom: 40,
  },
  label: {
    color: "white",
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: 40,
    marginBottom: 5,
    fontWeight: "bold",
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
    bottom: "50%",
    alignSelf: "center",
  },
});

export default SignIn;
