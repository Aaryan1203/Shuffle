import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.mainText}>SHUFFLE</Text>
        <Text style={styles.subText}>Take the stress out of studying!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.getStarted}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.getStarted}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00A196",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginTop: "30%",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 150,
  },
  mainText: {
    color: "#F5FAFA",
    fontSize: 64,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
  },
  buttonContainer: {
    paddingTop: 150,
    marginTop: 50,
    marginBottom: "20%",
    width: "50%",
  },
  signIn: {
    backgroundColor: "#A9E5FE",
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 24,
    marginVertical: 8,
    color: "black",
    textAlign: "center",
    paddingVertical: 5,
  },
  getStarted: {
    backgroundColor: "#064B47",
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 24,
    marginVertical: 8,
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
  },
});

export default WelcomeScreen;
