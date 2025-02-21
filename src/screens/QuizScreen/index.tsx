import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuizTimer from "./components/QuizTimer";

// Sample questions - replace with your actual questions
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  // Add more questions as needed
];

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [answers, setAnswers] = useState<Array<string | null>>([]);

  const handleSubmit = () => {
    if (selectedOption) {
      setIsTimerPaused(true);
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = selectedOption;
      setAnswers(newAnswers);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(answers[currentQuestionIndex + 1] || null);
      setIsTimerPaused(false);
    }
  };

  const handleTimeUp = () => {
    // Handle when time is up
    alert("Time is up! Your quiz will be submitted automatically.");
    // Implement your submission logic here
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.container}>
      <QuizTimer totalTimeInMinutes={30} isPaused={isTimerPaused} onTimeUp={handleTimeUp} />

      <ScrollView style={styles.content}>
        <Text style={styles.questionNumber}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>

        <Text style={styles.questionText}>{currentQuestion.question}</Text>

        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedOption === option && styles.selectedOption,
                answers[currentQuestionIndex] === option && styles.answeredOption,
              ]}
              onPress={() => !answers[currentQuestionIndex] && setSelectedOption(option)}
              disabled={!!answers[currentQuestionIndex]}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        {!answers[currentQuestionIndex] && (
          <TouchableOpacity
            style={[styles.button, !selectedOption && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={!selectedOption}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        )}

        {answers[currentQuestionIndex] && currentQuestionIndex < questions.length - 1 && (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next Question</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  questionNumber: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedOption: {
    backgroundColor: "#e3f2fd",
    borderColor: "#2196f3",
  },
  answeredOption: {
    backgroundColor: "#e8f5e9",
    borderColor: "#4caf50",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  button: {
    backgroundColor: "#2196f3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
