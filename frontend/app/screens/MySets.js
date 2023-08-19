import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MySets(props) {
  const [areButtonsVisible, setButtonsVisibility] = useState(false);
  const animatedValue = useState(new Animated.Value(0))[0];
  const [searchBar, setSearchBar] = useState("");

  const handlePlusPress = () => {
    Animated.timing(animatedValue, {
      toValue: areButtonsVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setButtonsVisibility(!areButtonsVisible);
    });
  };

  const aiButtonTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [110, 0],
  });

  const cardButtonTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [55, 0],
  });

  const AnimatedButton = ({ animatedValue, translation, children }) => {
    const translateX = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [translation, 0],
    });

    return (
      <Animated.View style={{ transform: [{ translateX }] }}>
        {children}
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Sets</Text>
        <View style={{ flexDirection: "row" }}>
          <AnimatedButton animatedValue={animatedValue} translation={110}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.aiButtonText}>AI</Text>
            </TouchableOpacity>
          </AnimatedButton>
          <AnimatedButton animatedValue={animatedValue} translation={55}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="card-outline" size={24} color="#00A196" />
            </TouchableOpacity>
          </AnimatedButton>
          <TouchableOpacity style={styles.button} onPress={handlePlusPress}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#B0B0B0" />
        <TextInput
          style={styles.searchInput}
          value={searchBar}
          onChangeText={(text) => setSearchBar(text)}
          placeholder="Search Sets..."
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
    paddingTop: "10%",
    paddingHorizontal: "5%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10%",
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 23,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 35,
    color: "#00A196",
    paddingBottom: 4,
    paddingLeft: 1,
  },
  aiButtonText: {
    fontSize: 20,
    color: "#00A196",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#363636",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 25,
    height: 50,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "#B0B0B0",
    fontSize: 20,
  },
});
export default MySets;
