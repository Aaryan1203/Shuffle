import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  PanResponder,
} from "react-native";
import BackButton from "../components/BackButton";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const handleSwipe = (
  gestureState,
  greenCount,
  setGreenCount,
  redCount,
  setRedCount,
  moveToNextCard
) => {
  if (gestureState.dx > 50) {
    setGreenCount(greenCount + 1);
    moveToNextCard();
  } else if (gestureState.dx < -50) {
    setRedCount(redCount + 1);
    moveToNextCard();
  }
};

const moveToNextCard = (
  currentIndex,
  cards,
  setIsFlipped,
  setCurrentIndex,
  setGreenCount,
  setRedCount
) => {
  setIsFlipped(false);
  if (currentIndex < cards.length - 1) {
    setCurrentIndex(currentIndex + 1);
  } else {
    setCurrentIndex(0);
    setGreenCount(0);
    setRedCount(0);
  }
};

function Flashcards({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSwiped, setIsSwiped] = useState(false);
  const [cards, setCards] = useState([
    { term: "Term 1", definition: "Definition 1" },
    { term: "Term 2", definition: "Definition 2" },
    { term: "Term 3", definition: "Definition 3" },
    { term: "Term 4", definition: "Definition 4" },
  ]);
  const currentIndexRef = useRef(currentIndex);
  const greenCountRef = useRef(greenCount);
  const redCountRef = useRef(redCount);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
    greenCountRef.current = greenCount;
    redCountRef.current = redCount;
  }, [currentIndex, greenCount, redCount]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (Math.abs(gestureState.dx) > 5) {
          setIsSwiped(true);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        handleSwipe(
          gestureState,
          greenCountRef.current,
          setGreenCount,
          redCountRef.current,
          setRedCount,
          () =>
            moveToNextCard(
              currentIndexRef.current,
              cards,
              setIsFlipped,
              setCurrentIndex,
              setGreenCount,
              setRedCount
            )
        );
      },
      onPanResponderTerminate: () => {
        // reset the isSwiped flag
        setIsSwiped(false);
      },
    })
  ).current;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <BackButton navigation={navigation} />
          <TouchableOpacity style={styles.undoButton}>
            <MaterialIcons name="undo" size={24} color="#00A196" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settings}>
            <Ionicons name="settings-outline" size={24} color="#00A196" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContent}>
          <View
            {...panResponder.panHandlers}
            style={styles.flashcard}
            onTouchEnd={() => {
              if (!isSwiped) {
                setIsFlipped(!isFlipped);
              }
              setIsSwiped(false);
            }}
          >
            <Text style={styles.flashcardText}>
              {isFlipped
                ? cards[currentIndex].definition
                : cards[currentIndex].term}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.colorBoxRed}>
            <Text style={styles.scoreText}>{redCount}</Text>
          </View>
          <View style={styles.cardNumberContainer}>
            <Text style={styles.cardNumber}>
              {currentIndex + 1}/{cards.length}
            </Text>
          </View>
          <View style={styles.colorBoxGreen}>
            <Text style={styles.scoreText}>{greenCount}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1B",
    paddingTop: "15%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  undoText: {
    color: "#00A196",
    fontSize: 18,
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
  },
  flashcard: {
    backgroundColor: "white",
    height: "75%",
    borderRadius: 20,
    marginBottom: 20,
    width: "70%",
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  flashcardText: {
    fontSize: 32,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "25%",
  },
  cardNumberContainer: {
    height: 60,
    paddingHorizontal: 25,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  cardNumber: {
    color: "black",
    fontSize: 24,
  },
  colorBoxGreen: {
    width: 60,
    height: 60,
    backgroundColor: "green",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  colorBoxRed: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    fontSize: 24,
  },
  settings: {
    backgroundColor: "#F5FAFA",
    padding: 10,
    borderRadius: 10,
  },
  undoButton: {
    backgroundColor: "#F5FAFA",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default Flashcards;