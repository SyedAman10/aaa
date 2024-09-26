import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const VirtualPetScreen = () => {
  const [happiness, setHappiness] = useState(50);
  const [hunger, setHunger] = useState(50);
  const [thirst, setThirst] = useState(50);
  const [petState, setPetState] = useState('neutral'); // happy, sad, hungry, thirsty

  // Decrease stats over time to simulate pet needs
  useEffect(() => {
    const interval = setInterval(() => {
      setHappiness((prev) => (prev > 0 ? prev - 1 : 0));
      setHunger((prev) => (prev < 100 ? prev + 1 : 100));
      setThirst((prev) => (prev < 100 ? prev + 1 : 100));

      updatePetState();
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [happiness, hunger, thirst]);

  // Update pet state based on conditions
  const updatePetState = () => {
    if (hunger >= 80) {
      setPetState('hungry');
    } else if (thirst >= 80) {
      setPetState('thirsty');
    } else if (happiness >= 70) {
      setPetState('happy');
    } else {
      setPetState('neutral');
    }
  };

  // Handle actions
  const feedPet = () => {
    setHunger(hunger - 20);
    setHappiness(happiness + 10);
  };

  const giveWater = () => {
    setThirst(thirst - 20);
    setHappiness(happiness + 10);
  };

  const playWithPet = () => {
    setHappiness(happiness + 15);
    setHunger(hunger + 5); // Playing makes the pet hungry!
    setThirst(thirst + 5); // Playing makes the pet thirsty!
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Virtual Pet Care</Text>

      <View style={styles.petContainer}>
        {/* Pet's image changes based on the state */}
        <Image
          style={styles.petImage}
          source={
            petState === 'happy'
              ? require('./../assets/pet.jpeg')
              : petState === 'hungry'
              ? require('./../assets/pet.jpeg')
              : petState === 'thirsty'
              ? require('./../assets/pet.jpeg')
              : require('./../assets/pet.jpeg')
          }
        />
        <Text style={styles.petStateText}>
          {petState === 'happy'
            ? 'Your pet is happy!'
            : petState === 'hungry'
            ? 'Your pet is hungry!'
            : petState === 'thirsty'
            ? 'Your pet is thirsty!'
            : 'Your pet is doing fine.'}
        </Text>
      </View>

      <View style={styles.stats}>
        <Text style={styles.statText}>Happiness: {happiness}%</Text>
        <Text style={styles.statText}>Hunger: {hunger}%</Text>
        <Text style={styles.statText}>Thirst: {thirst}%</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={feedPet}>
          <Text style={styles.buttonText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={giveWater}>
          <Text style={styles.buttonText}>Water</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={playWithPet}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
  },
  petContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  petImage: {
    width: 200,
    height: 200,
  },
  petStateText: {
    fontSize: 18,
    color: '#00796b',
    marginTop: 10,
  },
  stats: {
    marginBottom: 20,
  },
  statText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#004d40',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#00796b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default VirtualPetScreen;
