import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./../assets/bg.jpeg')} // Change this to your background image path
      style={styles.background}
      imageStyle={styles.image}
    >
      <View style={styles.container}>
        {/* Title at the top */}
        <Text style={styles.title}>App just made for my Rimmi</Text>
        
        {/* Spacer View to push buttons to the center */}
        <View style={styles.spacer} />
        
        {/* Centered buttons */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Explore')}>
          <Text style={styles.cardText}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Notes')}>
          <Text style={styles.cardText}>Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DailyInspiration')}>
          <Text style={styles.cardText}>Daily Quotes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('VirtualPetScreen')}>
          <Text style={styles.cardText}>Virtual Pet</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SnakeGame')}>
          <Text style={styles.cardText}>Snake Game</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BookScreen')}>
          <Text style={styles.cardText}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BirthdaySpecialScreen')}>
          <Text style={styles.cardText}>Birthday</Text>
        </TouchableOpacity>
      </View>
      
      {/* Footer text */}
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
    justifyContent: 'flex-start', // Align items from the top
    paddingTop: 40, // Optional: Add some padding from the top
  },
  title: {
    fontSize: 28,
    color: '#fbe3e8',
    fontWeight: 'bold',
    marginBottom: 30, // Adjusted margin for better spacing
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  spacer: {
    flex: 0.4, // This will push the buttons to the center
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darker translucent background
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Elevation for Android shadow
  },
  cardText: {
    fontSize: 20,
    color: '#fbe3e8',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  footerText: {
    position: 'absolute', // Positioning it at the bottom right
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

export default Home;
