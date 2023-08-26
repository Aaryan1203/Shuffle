import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../components/BackButton";
import TermDefinition from "../components/TermDefinition";

function SetScreen({ navigation, route }) {
  const { title, dateCreated } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <BackButton style={styles.backButton} navigation={navigation} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.playButton}>
            <LinearGradient
              colors={["#007E75", "#00A196"]}
              style={styles.gradientBackground}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              angle={135}
              useAngle={true}
            />
            <View style={styles.iconContainer}>
              <Ionicons name="play" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <LinearGradient
              colors={["#07559E", "#1B83E2"]}
              style={styles.gradientBackground}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              angle={135}
              useAngle={true}
            />
            <View style={styles.iconContainer}>
              <Ionicons name="pencil" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headers}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.dateText}>Date created: {dateCreated}</Text>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <TermDefinition key={1} termNumber={1} />
        <TermDefinition key={2} termNumber={2} />
        <TermDefinition key={3} termNumber={3} />
      </ScrollView>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#1A1A1B",
    paddingTop: "20%",
    paddingHorizontal: "3%",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "7%",
  },
  playButton: {
    marginHorizontal: 10,
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
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    width: 90,
  },
  titleText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 8,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: "10%",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginRight: "12%",
  },
};

export default SetScreen;
