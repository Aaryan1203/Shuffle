import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

function MySets(props) {
  const [areButtonsVisible, setButtonsVisibility] = useState(false);
  const animatedValue = useState(new Animated.Value(0))[0];

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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Sets</Text>
        <View style={{ flexDirection: "row" }}>
          {
            <Animated.View
              style={{ transform: [{ translateX: aiButtonTranslateX }] }}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.aiButtonText}>AI</Text>
              </TouchableOpacity>
            </Animated.View>
          }
          {
            <Animated.View
              style={{ transform: [{ translateX: cardButtonTranslateX }] }}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>🃏</Text>
              </TouchableOpacity>
            </Animated.View>
          }
          <TouchableOpacity style={styles.button} onPress={handlePlusPress}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
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
    marginRight: 10,
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
});
export default MySets;
