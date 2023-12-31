import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PopUp = ({ message, subMessage, onStay, onLeave, exitText, stayText }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleOnLeave = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(onLeave);
  };

  const handleOnStay = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(onStay);
  };
  return (
    <Animated.View style={[styles.overlay, { opacity }]}>
      <View style={styles.container}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.subMessage}>{subMessage}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button]} onPress={handleOnLeave}>
            <LinearGradient
              colors={["#B33", "#E34C4C"]}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              angle={135}
            >
              <Text style={styles.buttonText}>{exitText}</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button]} onPress={handleOnStay}>
            <LinearGradient
              colors={["#007A66", "#00A196"]}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              angle={135}
            >
              <Text style={styles.buttonText}>{stayText}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  container: {
    width: "80%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  message: {
    fontSize: 25,
    marginBottom: 12,
    textAlign: "center",
  },
  subMessage: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    margin: 5,
    paddingVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
});

export default PopUp;
