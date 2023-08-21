import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import SafetyScreen from "../components/SafetyScreen";

function Profile({ navigation, profileImageUrl, userName }) {
  const [showSafetyScreen, setShowSafetyScreen] = useState(false);

  const handleLogOut = () => {
    setShowSafetyScreen(true);
  };

  const handleStay = () => {
    setShowSafetyScreen(false);
  };

  const handleLeave = () => {
    setShowSafetyScreen(false);
    props.navigation.navigate("Welcome");
  };
  return (
    <View style={styles.container}>
      {showSafetyScreen && (
        <SafetyScreen
          message="Are you sure you want to log out?"
          onStay={handleStay}
          onLeave={handleLeave}
          exitText="Logout"
          stayText="Stay"
        />
      )}
      <View style={styles.topBar}>
        <Text style={styles.profileText}>Profile</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.settings}>
            <Ionicons name="settings-outline" size={24} color="#00A196" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleLogOut}>
            <LinearGradient
              colors={["#B33", "#E34C4C"]}
              style={styles.gradientBackground}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              angle={135}
              useAngle={true}
            />
            <View style={styles.logOut}>
              <Ionicons name="log-out-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
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
        <Text style={styles.userNameText}>Aaryan Jain</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1B",
    paddingTop: "10%",
    paddingHorizontal: "5%",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10%",
    width: "100%",
  },
  profileText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  iconButton: {
    width: 45,
    height: 45,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    borderRadius: 10,
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginRight: 10,
  },
  settings: {
    backgroundColor: "white",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  userNameText: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
  },
});
export default Profile;
