import React from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import TermDefinition from "../components/TermDefinition";
import BackButton from "../components/BackButton";
import { Ionicons } from "@expo/vector-icons";

function Settings({ navigation, profileImageUrl, userName }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <BackButton navigation={navigation} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Settings</Text>
        </View>
        <View style={styles.placeholder}></View>
      </View>
      <View style={styles.profileImageContainer}>
        {profileImageUrl ? (
          <Image
            source={{ uri: profileImageUrl }}
            style={styles.profileImage}
          />
        ) : (
          <Ionicons name="person-circle-outline" size={200} color="white" />
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your first name"
          placeholderTextColor="#B0B0B0"
        />
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your last name"
          placeholderTextColor="#B0B0B0"
        />
      </View>
    </View>
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
    alignSelf: "stretch",
    paddingHorizontal: "5%",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    flex: 1,
  },
  titleText: {
    fontSize: 35,
    color: "white",
    textAlign: "center",
  },
  placeholder: {
    width: 44,
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  inputContainer: {
    width: "90%",
  },
  inputLabel: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "white",
    backgroundColor: "#363636",
  },
});
export default Settings;
