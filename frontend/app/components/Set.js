import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Set = ({ title, dateCreated, onPress, navigation }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.setContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => navigation.navigate("Flashcards")}
          >
            <LinearGradient
              colors={["#007E75", "#00A196"]}
              style={styles.gradientBackground}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              angle={135}
              useAngle={true}
            />
            <View style={styles.iconContainer}>
              <Ionicons name="play" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.dateText}>{dateCreated}</Text>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => navigation.navigate("CreateManualSetRoot")}
          >
            <LinearGradient
              colors={["#07559E", "#1B83E2"]}
              style={styles.gradientBackground}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              angle={135}
              useAngle={true}
            />
            <View style={styles.iconContainer}>
              <Ionicons name="pencil" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  setContainer: {
    backgroundColor: "#363636",
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 3,
    paddingLeft: 5,
  },
  playButton: {
    borderRadius: 10,
    overflow: "hidden",
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  dateText: {
    color: "white",
    fontSize: 18,
    marginTop: 5,
    paddingLeft: 5,
  },
  editButton: {
    borderRadius: 10,
    overflow: "hidden",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 100,
  },
});

export default Set;
