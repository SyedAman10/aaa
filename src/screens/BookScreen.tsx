import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Tts from 'react-native-tts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [lastRead, setLastRead] = useState<number | null>(null);
  const [displayedText, setDisplayedText] = useState(''); // For typewriter effect
  const [isTyping, setIsTyping] = useState(false); // To track if typewriter effect is running
  const pages = [
    `EPISODE 1:
    rimmi meri jaan i cannot believe that we are getting married in just a few days , rimmi i know things are tough and u might be thinking that what will happen after we get married but i know for sure that me and you are gonna make a perfect couple, the one which people will admire i know things are a bit shaky i know u might have a lot of questions in your mind but rimmi i know that we were always meant to be , i am going through a tough and so as you , u see i hope when you are reading this u and i are in a much better place and condition than we are right now.i dont want anything or anyone i just want you. rimmi life is all about having fun and since we are getting married lets just be happy :))). rimmi i have decided everyday i will write an episode of our life everyday, this is just a beginning i dont know how life turns out to be but i will just keep writing and jotting my thoughts in this book and u will keep receiving them i wanna make something really great for you, i just wanna give u a very pretty gift which will last our lifetime`,
  ];
  useEffect(() => {
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultRate(0.3);
    Tts.setDefaultPitch(1.2);

    const checkLastRead = async () => {
      const lastReadTime = await AsyncStorage.getItem('lastRead');
      if (lastReadTime) {
        const lastReadDate = new Date(parseInt(lastReadTime));
        const now = new Date();
        setIsNextEnabled(now.getTime() - lastReadDate.getTime() >= 24 * 60 * 60 * 1000);
        setLastRead(lastReadDate.getTime());
      }
    };

    checkLastRead();
  }, []);

  const typeWriter = (text: string, index = 0) => {
    if (index < text.length) {
      setDisplayedText((prev) => prev + text.charAt(index));
      setTimeout(() => typeWriter(text, index + 1), 50); // Delay between characters
    } else {
      setIsTyping(false); // Reset when done
    }
  };

  const readContent = () => {
    if (!isTyping) {
      setDisplayedText(''); // Clear previous text
      setIsTyping(true); // Set typing state
      Tts.stop(); // Stop any previous TTS
      typeWriter(pages[currentPage]); // Start typewriter effect
      Tts.speak(pages[currentPage]); // Start speaking the text
    }
  };

  const nextPage = async () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      const now = new Date();
      await AsyncStorage.setItem('lastRead', now.getTime().toString());
      setIsNextEnabled(false); // Disable the button after reading a page
      setDisplayedText(''); // Reset text display
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setDisplayedText(''); // Reset text display for previous page
    }
  };

  return (
    <ImageBackground
      source={require('./../assets/bg.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>HAMARI BOOK </Text>

        <View style={styles.page}>
          {/* Lined effect */}
          <View style={styles.lines}>
            {Array.from({ length: 20 }).map((_, index) => (
              <View key={index} style={styles.line} />
            ))}
          </View>
          {/* Make the content scrollable */}
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.content}>{displayedText}</Text>
          </ScrollView>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity style={styles.button} onPress={prevPage} disabled={currentPage === 0}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { opacity: isNextEnabled ? 1 : 0.5 }]}
            onPress={nextPage}
            disabled={!isNextEnabled}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={readContent} disabled={isTyping}>
            <Text style={styles.buttonText}>Read Aloud</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.footerText}>Made with love by Aman</Text>
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
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: '#fbe3e8',
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  page: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative',
  },
  lines: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    height: '100%',
    zIndex: 1,
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
    position: 'absolute',
    left: 20,
    right: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    fontSize: 18,
    color: '#e7b5bf',
    lineHeight: 24,
    textAlign: 'left',
    position: 'relative',
    zIndex: 2,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#e7b5bf',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    fontSize: 14,
    color: '#fbe3e8',
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default BookScreen;
