import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Linking, Alert } from 'react-native';

const BirthdaySpecialScreen = () => {
  const [birthday, setBirthday] = useState(new Date(2024, 8, 30)); // Example birthday: 20th October 2024
  const [selectedOption1, setSelectedOption1] = useState<string | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<string | null>(null);
  const [selectedOption3, setSelectedOption3] = useState<string | null>(null);
  const [countdown, setCountdown] = useState('');

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = birthday.getTime() - now.getTime();
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60)) / (1000 * 60));
      setCountdown(`${days} days, ${hours} hours, and ${minutes} minutes`);
    }, 1000);
    return () => clearInterval(interval);
  }, [birthday]);

  const options1 = ['Winterland', 'Arena'];
  const options2 = ['Bird', 'Fish'];
  const options3 = ['Pizza Party', 'Sushi Night', 'Fine Dining'];

  const renderOptions = (options: string[], selectedOption: string | null, onSelect: (option: string) => void) => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.optionButton, selectedOption === option && styles.selectedOptionButton]}
        onPress={() => onSelect(option)}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  const handleSendWhatsAppMessage = () => {
    const message = `Aman, I want to go to ${selectedOption1 || 'somewhere fun'}, adopt a ${selectedOption2 || 'cute pet'}, and enjoy a ${selectedOption3 || 'delicious meal'}.`;
    
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappUrl).catch(() => {
      Alert.alert('Make sure WhatsApp is installed!');
    });
  };

  return (
    <ImageBackground source={require('./../assets/bg.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>🎉 Birthday Countdown 🎉</Text>
        <Text style={styles.countdownText}>Time left: {countdown}</Text>

        {/* Question 1 Card */}
        <View style={styles.card}>
          <Text style={styles.questionText}>1. Where would you like to celebrate?</Text>
          <View style={styles.optionsContainer}>
            {renderOptions(options1, selectedOption1, setSelectedOption1)}
          </View>
        </View>

        {/* Question 2 Card */}
        <View style={styles.card}>
          <Text style={styles.questionText}>2. Which pet would you choose?</Text>
          <View style={styles.optionsContainer}>
            {renderOptions(options2, selectedOption2, setSelectedOption2)}
          </View>
        </View>

        {/* Question 3 Card */}
        <View style={styles.card}>
          <Text style={styles.questionText}>3. What type of dinner?</Text>
          <View style={styles.optionsContainer}>
            {renderOptions(options3, selectedOption3, setSelectedOption3)}
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSendWhatsAppMessage}>
          <Text style={styles.submitButtonText}>Send to Aman 💖</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Made with love by Aman 💖</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#f5a623',
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  countdownText: {
    fontSize: 18,
    color: '#fbe3e8',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 2)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  questionText: {
    fontSize: 20,
    color: '#333',
    fontWeight: '600',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: '#f5a623',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#f08080',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#f08080',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    color: '#fff',
    fontWeight: '400',
  },
});

export default BirthdaySpecialScreen;
