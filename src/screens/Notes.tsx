import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Linking, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');

  const addNote = () => {
    if (note.trim() && notes.length < 5) {
      setNotes([...notes, { note, scheduleTime }]);
      setNote('');
      setScheduleTime('');
    } else if (notes.length >= 5) {
      Alert.alert('Limit Reached', 'You can only store up to 5 notes.');
    } else {
      Alert.alert('Empty Note', 'Please write a note before adding.');
    }
  };

  const sendNoteToWhatsApp = (note: string) => {
    const whatsappURL = `whatsapp://send?text=${encodeURIComponent(note)}`;
    Linking.openURL(whatsappURL).catch(() => {
      Alert.alert('Error', 'Make sure WhatsApp is installed on your device.');
    });
  };

  const scheduleNotes = () => {
    notes.forEach((item) => {
      const { note, scheduleTime } = item;
      const now = new Date();
      const targetTime = new Date(scheduleTime);

      if (targetTime > now) {
        const timeDiff = targetTime.getTime() - now.getTime();
        setTimeout(() => {
          sendNoteToWhatsApp(note);
        }, timeDiff);
      } else {
        Alert.alert('Invalid Time', 'Please set a future time for the note.');
      }
    });
  };

  return (
    <ImageBackground 
    source={require('./../assets/bg.jpeg')} // Change this to your background image path
    style={styles.background}
      imageStyle={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Add and send notes through WhatsApp</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.textInput}
            placeholder="Write your note here..."
            multiline
            value={note}
            onChangeText={setNote}
          />

          <TextInput
            style={styles.timeInput}
            placeholder="Set time (YYYY-MM-DD HH:MM)"
            value={scheduleTime}
            onChangeText={setScheduleTime}
          />

          <Button title="Add Note" onPress={addNote} />
        </View>

        <FlatList
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.noteItem}>
              <Text>{item.note}</Text>
              <Text style={styles.timeText}>Scheduled for: {item.scheduleTime}</Text>
            </View>
          )}
        />

        <TouchableOpacity style={styles.button} onPress={scheduleNotes}>
          <Text style={styles.buttonText}>Schedule All Notes</Text>
        </TouchableOpacity>
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
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Change text color for contrast
  },
  card: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  textInput: {
    height: 100,
    textAlignVertical: 'top',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  timeInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#25D366',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#25D366',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  timeText: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
  },
});

export default Notes;
