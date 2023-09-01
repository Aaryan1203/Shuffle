import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Home({ navigation, recentSet }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.newsText}>News</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.mainContainer}>
          <View style={styles.whiteContainer}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.shuffleText}>Shuffle</Text>
          </View>

          <Text style={styles.welcomeTitle}>Welcome to Shuffle</Text>
          <Text style={styles.welcomeText}>
            Welcome to Shuffle. All updates and...
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.getStartedText}>Get Started</Text>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateManualSet")}
          >
            <View style={styles.innerRectangleContainer}>
              <Text style={styles.rectangleText}>
                Create a New Set Manually
              </Text>
              <View style={styles.iconContainer}>
                <Ionicons name="card-outline" size={24} color="#00A196" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CreateAISet")}>
            <View style={styles.innerRectangleContainer}>
              <Text style={styles.rectangleText}>Create a New Set With AI</Text>
              <View style={styles.iconContainer}>
                <Text style={styles.aiButtonText}>AI</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.innerRectangleContainer}>
              <Text style={styles.rectangleText}>
                Study recent set: {recentSet}
              </Text>
              <View style={styles.iconContainer}>
                <Ionicons name="play-outline" size={24} color="#00A196" />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1B",
    paddingTop: "20%",
    paddingHorizontal: "5%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  newsText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  mainContainer: {
    backgroundColor: "#363636",
    borderRadius: 10,
    marginTop: 25,
    padding: 10,
    height: 240,
  },
  whiteContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "70%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 80,
    marginRight: 10,
  },
  shuffleText: {
    fontSize: 40,
    color: "black",
  },
  welcomeTitle: {
    fontSize: 24,
    color: "white",
    marginTop: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: "#F5FAFA",
    marginTop: 8,
  },
  footerContainer: {
    marginTop: "5%",
  },
  footerContainer: {
    marginTop: "15%",
  },
  getStartedText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  rectangleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#363636",
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
  },
  innerRectangleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#363636",
    padding: 6,
    marginBottom: 10,
    borderRadius: 10,
  },
  rectangleText: {
    fontSize: 16,
    color: "white",
    marginLeft: 5,
  },
  aiButtonText: {
    fontSize: 20,
    color: "#00A196",
    marginRight: 3,
    backgroundColor: "#FFF",
    padding: 1.5,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
});

export default Home;
