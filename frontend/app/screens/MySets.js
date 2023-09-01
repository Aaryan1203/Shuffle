import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Set from "../components/Set";

function MySets({ navigation }) {
  const [areButtonsVisible, setButtonsVisibility] = useState(false);
  const animatedValue = useState(new Animated.Value(0))[0];
  const [searchBar, setSearchBar] = useState("");
  const [sets, setSets] = useState([
    { title: "Set 1", dateCreated: "20th Aug 2023" },
    { title: "Set 2", dateCreated: "20th Aug 2023" },
  ]);

  const handlePlusPress = () => {
    Animated.timing(animatedValue, {
      toValue: areButtonsVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setButtonsVisibility(!areButtonsVisible);
    });
  };

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

  useEffect(() => {
    const resetAnimations = () => {
      if (areButtonsVisible) {
        handlePlusPress();
      }
    };

    const unsubscribe = navigation.addListener("blur", resetAnimations);

    return unsubscribe;
  }, [navigation, areButtonsVisible, handlePlusPress]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Sets</Text>
        <View style={{ flexDirection: "row" }}>
          <AnimatedButton animatedValue={animatedValue} translation={110}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CreateAISetRoot")}
            >
              <Text style={styles.aiButtonText}>AI</Text>
            </TouchableOpacity>
          </AnimatedButton>
          <AnimatedButton animatedValue={animatedValue} translation={55}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("CreateManualSetRoot")
              }
            >
              <Ionicons name="card-outline" size={24} color="#00A196" />
            </TouchableOpacity>
          </AnimatedButton>
          <TouchableOpacity style={styles.button} onPress={handlePlusPress}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color={searchBar.length > 0 ? "white" : "#B0B0B0"}
        />
        <TextInput
          style={styles.searchInput}
          value={searchBar}
          onChangeText={(text) => setSearchBar(text)}
          placeholder="Search Sets..."
          placeholderTextColor="#B0B0B0"
        />
      </View>
      <ScrollView>
        {sets
          .filter((set) =>
            set.title.toLowerCase().includes(searchBar.toLowerCase())
          )
          .map((set, index) => (
            <Set
              key={index}
              title={set.title}
              dateCreated={set.dateCreated}
              onPress={() =>
                navigation.navigate("SetScreen", {
                  title: set.title,
                  dateCreated: set.dateCreated,
                })
              }
              navigation={navigation}
            />
          ))}
      </ScrollView>
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
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "white",
    fontSize: 20,
  },
});
export default MySets;
