import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const triviaChallenges = [
  {
    title: "General Knowledge",
    description: "Test your knowledge on a wide range of topics!",
    questions: [
      { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
      // Add more questions...
    ],
    reward: { points: 100, badge: "Trivia Novice" }
  },
  // Add other challenges...
];

const TriviaChallenge = ({ navigation }) => {
  const [currentChallenge, setCurrentChallenge] = useState(triviaChallenges[0]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentChallenge.questions[currentQuestionIndex].answer) {
      setScore(score + currentChallenge.reward.points);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderQuestion = () => {
    const currentQuestion = currentChallenge.questions[currentQuestionIndex];
    if (currentQuestion) {
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleAnswer(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else {
      return (
        <Text style={styles.finalScoreText}>Final Score: {score}</Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Trivia Challenge</Text>
      <Text style={styles.descriptionText}>{currentChallenge.description}</Text>
      <Text style={styles.scoreText}>Score: {score}</Text>
      {renderQuestion()}
      {currentQuestionIndex >= currentChallenge.questions.length && (
        <Button title="Finish Challenge" onPress={() => navigation.goBack()} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 15,
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginVertical: 5,
  },
  optionText: {
    color: '#fff',
    textAlign: 'center',
  },
  finalScoreText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default TriviaChallenge;
