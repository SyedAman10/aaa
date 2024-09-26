// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';

// // Inspiration quotes and corresponding songs
// const inspirationData = [
//   {
//     quote: "I just want you so close so that i can feel you",
//     song: {
//       title: "Co2",
//       artist: "Prateek Kuhad",
//       spotifyUrl: "https://open.spotify.com/track/3hB9lDLyAClYVZivMMl20N?si=a1b5ddb1a3b2460c",
//     }
//   },
//   {
//     quote: "You take away all my focus RIMMMIIII",
//     song: {
//       title: "Very Few Friends",
//       artist: "Saint Levant",
//       spotifyUrl: "https://open.spotify.com/track/4rjcVZDZ74xqv49D8kFh5l?si=a7901edbcb184726",
//     }
//   },
//   {
//     quote: "NO AMOUNT OF TIME WILL CHANGE THE WAY I FEEL INSIDE, MERI ZINDAGI KA SUKOOOON!",
//     song: {
//       title: "brooklyn boy",
//       artist: "Jeremy Zucker",
//       spotifyUrl: "https://open.spotify.com/track/49NHhYyzUBQBwexsZxcjlN?si=44e635f2f61e472f",
//     }
//   },
//   {
//     quote: "i would die and kill for you. i hope you know it(my pookie).",
//     song: {
//       title: "BULLET",
//       artist: "NF",
//       spotifyUrl: "https://open.spotify.com/track/3vBTFVEcGhmH13Y0Lj9UTN?si=3bfde0ef3ac04255",
//     }
//   },
//   {
//     quote: "you make me feel like home!",
//     song: {
//       title: "Hide",
//       artist: "Juice WRLD",
//       spotifyUrl: "https://open.spotify.com/track/6rz0dTA0PdhXImFV5EjM0w?si=bd9abe91d70b4c35",
//     }
//   },
//   {
//     quote: "you know i miss you even you open this note when i am right beside you i will be missing you hehe! i just miss you",
//     song: {
//       title: "Hate the way",
//       artist: "Blackbear",
//       spotifyUrl: "https://open.spotify.com/track/40m90E8cUI3fsUczVj0PUs?si=0849169e495743d8",
//     }
//   },
//   {
//     quote: "you are my vibe rimmi",
//     song: {
//       title: "Let me know",
//       artist: "Juice WRLD",
//       spotifyUrl: "https://open.spotify.com/track/3wwo0bJvDSorOpNfzEkfXx?si=aa6f3a52870b4e33",
//     }
//   },
//   {
//     quote: "i love the way you look when you are sleeping , i can watch you sleep for hours (i never get bored of looking at you)rimmi",
//     song: {
//       title: "watch you sleep",
//       artist: "girl in red",
//       spotifyUrl: "https://open.spotify.com/track/6tMwheKgpMHBcHtr8aYMn8?si=d845671b450b4a05",
//     }
//   },
//   {
//     quote: "you can always have a cry session with me, (if nothing else gets you through darling ill cry with you).",
//     song: {
//       title: "Cry with you",
//       artist: "Jeremy Zucker",
//       spotifyUrl: "https://open.spotify.com/track/46LAHXpuIUZ5kR7AyQ1qmd?si=2fda7b04d4f34a76",
//     }
//   },{
//     quote: "its ok if you dont win every fight (ill be here forever)rimmi i will always be here",
//     song: {
//       title: "stay4ever",
//       artist: "Powfu",
//       spotifyUrl: "https://open.spotify.com/track/2h0FPaYBXNaBNh50W8m3Hc?si=b7c409f262f74ba3",
//     }
//   },{
//     quote: "me and u look PERFECT",
//     song: {
//       title: "would look perfect",
//       artist: "Powfu",
//       spotifyUrl: "https://open.spotify.com/track/2L2mNkEWo818IE4fKbnP0O?si=56f978ea0f654f92",
//     }
//   },
//   {
//     quote: "i love the way that you see me",
//     song: {
//       title: "the way that you see me",
//       artist: "Powfu",
//       spotifyUrl: "https://open.spotify.com/track/0k2bhZ9oM3boyUWaV3MfWk?si=96484f610ef0444c",
//     }
//   },
//   {
//     quote: "u have a cute face which never goes away from my mind :)",
//     song: {
//       title: "met at a party",
//       artist: "Powfu",
//       spotifyUrl: "https://open.spotify.com/track/6lolmparasWzec5kcrmoej?si=8ec9915f95cf4501",
//     }
//   },
//   {
//     quote: "u already know my words before i speak <3",
//     song: {
//       title: "are u ok?",
//       artist: "Powfu",
//       spotifyUrl: "https://open.spotify.com/track/2U8tH2LXMh5EQvI6oBhSHJ?si=6b3ab3c62bf94990",
//     }
//   },
//   {
//     quote: "you are my everything rimmi",
//     song: {
//       title: "Die For u",
//       artist: "Weeknd",
//       spotifyUrl: "https://open.spotify.com/track/4W4fNrZYkobj539TOWsLO2?si=6d6e8398cf8d4586",
//     }
//   },
//   {
//     quote: "RIMMI AND AMAN WERE BORN TO DIE",
//     song: {
//       title: "Born to Die",
//       artist: "LDR",
//       spotifyUrl: "https://open.spotify.com/track/4Ouhoi2lAhrLJKFzUqEzwl?si=b04a576d47074fbf",
//     }
//   },
//   {
//     quote: "i will leave you till the ene ",
//     song: {
//       title: "blue jeans",
//       artist: "LDR",
//       spotifyUrl: "https://open.spotify.com/track/4RyK6N4IQ85xxLgguQAFH5?si=7d03855d094e44cf",
//     }
//   },
  

// ];

// const DailyInspiration = () => {
//   const [currentInspiration, setCurrentInspiration] = useState({ quote: "", song: {} });

//   useEffect(() => {
//     getNewInspiration(); // Display a quote and song when the screen loads
//   }, []);

//   const getNewInspiration = () => {
//     const randomIndex = Math.floor(Math.random() * inspirationData.length);
//     setCurrentInspiration(inspirationData[randomIndex]);
//   };

//   const openSpotify = () => {
//     Linking.openURL(currentInspiration.song.spotifyUrl); // Open Spotify link
//   };

//   return (
//     <ImageBackground
//       source={require('./../assets/bg.jpeg')} // Change this to your background image path
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         {/* Glass effect card for the inspiration quote */}
//         <View style={styles.glassCard}>
//           <Text style={styles.quoteText}>{currentInspiration.quote}</Text>
//         </View>

//         {/* Button for new inspiration */}
//         <TouchableOpacity style={styles.button} onPress={getNewInspiration}>
//           <Text style={styles.buttonText}>New Inspiration</Text>
//         </TouchableOpacity>

//         {/* Song of the Day card */}
//         <View style={styles.songCard}>
//           <Text style={styles.songText}>Song of the Day:</Text>
//           <Text style={styles.songTitle}>{currentInspiration.song.title}</Text>
//           <Text style={styles.songArtist}>by {currentInspiration.song.artist}</Text>

//           {/* Button to open Spotify */}
//           <TouchableOpacity style={styles.spotifyButton} onPress={openSpotify}>
//             <Text style={styles.spotifyButtonText}>Listen on Spotify</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   glassCard: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect background
//     padding: 20,
//     borderRadius: 20,
//     borderColor: 'rgba(255, 255, 255, 0.4)', // Border for depth
//     borderWidth: 1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     marginBottom: 30, // Spacing between cards
//   },
//   quoteText: {
//     fontSize: 24,
//     color: '#fbe3e8',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontStyle: 'italic',
//   },
//   button: {
//     backgroundColor: '#ff7f50', // Coral color
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//     marginTop: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5, // Android shadow
//   },
//   buttonText: {
//     color: '#fbe3e8',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   // Song of the Day card
//   songCard: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
//     padding: 20,
//     borderRadius: 20,
//     borderColor: 'rgba(255, 255, 255, 0.4)', // Border for depth
//     borderWidth: 1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     marginTop: 30,
//     alignItems: 'center',
//   },
//   songText: {
//     fontSize: 18,
//     color: '#fbe3e8',
//     marginBottom: 10,
//     fontWeight: '600',
//   },
//   songTitle: {
//     fontSize: 20,
//     color: '#fbe3e8',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   songArtist: {
//     fontSize: 16,
//     color: '#ccc',
//     marginBottom: 20,
//   },
//   spotifyButton: {
//     backgroundColor: '#1DB954', // Spotify green color
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//   },
//   spotifyButtonText: {
//     color: '#fbe3e8',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default DailyInspiration;



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // To store day information persistently

// Inspiration quotes and corresponding songs
const inspirationData = [
  {
    quote: "I just want you so close so that i can feel you",
    song: {
      title: "Co2",
      artist: "Prateek Kuhad",
      spotifyUrl: "https://open.spotify.com/track/3hB9lDLyAClYVZivMMl20N?si=a1b5ddb1a3b2460c",
    }
  },
  {
    quote: "You take away all my focus RIMMMIIII",
    song: {
      title: "Very Few Friends",
      artist: "Saint Levant",
      spotifyUrl: "https://open.spotify.com/track/4rjcVZDZ74xqv49D8kFh5l?si=a7901edbcb184726",
    }
  },
  {
    quote: "NO AMOUNT OF TIME WILL CHANGE THE WAY I FEEL INSIDE, MERI ZINDAGI KA SUKOOOON!",
    song: {
      title: "brooklyn boy",
      artist: "Jeremy Zucker",
      spotifyUrl: "https://open.spotify.com/track/49NHhYyzUBQBwexsZxcjlN?si=44e635f2f61e472f",
    }
  },
  {
    quote: "i would die and kill for you. i hope you know it(my pookie).",
    song: {
      title: "BULLET",
      artist: "NF",
      spotifyUrl: "https://open.spotify.com/track/3vBTFVEcGhmH13Y0Lj9UTN?si=3bfde0ef3ac04255",
    }
  },
  {
    quote: "you make me feel like home!",
    song: {
      title: "Hide",
      artist: "Juice WRLD",
      spotifyUrl: "https://open.spotify.com/track/6rz0dTA0PdhXImFV5EjM0w?si=bd9abe91d70b4c35",
    }
  },
  {
    quote: "you know i miss you even you open this note when i am right beside you i will be missing you hehe! i just miss you",
    song: {
      title: "Hate the way",
      artist: "Blackbear",
      spotifyUrl: "https://open.spotify.com/track/40m90E8cUI3fsUczVj0PUs?si=0849169e495743d8",
    }
  },
  {
    quote: "you are my vibe rimmi",
    song: {
      title: "Let me know",
      artist: "Juice WRLD",
      spotifyUrl: "https://open.spotify.com/track/3wwo0bJvDSorOpNfzEkfXx?si=aa6f3a52870b4e33",
    }
  },
  {
    quote: "i love the way you look when you are sleeping , i can watch you sleep for hours (i never get bored of looking at you)rimmi",
    song: {
      title: "watch you sleep",
      artist: "girl in red",
      spotifyUrl: "https://open.spotify.com/track/6tMwheKgpMHBcHtr8aYMn8?si=d845671b450b4a05",
    }
  },
  {
    quote: "you can always have a cry session with me, (if nothing else gets you through darling ill cry with you).",
    song: {
      title: "Cry with you",
      artist: "Jeremy Zucker",
      spotifyUrl: "https://open.spotify.com/track/46LAHXpuIUZ5kR7AyQ1qmd?si=2fda7b04d4f34a76",
    }
  },{
    quote: "its ok if you dont win every fight (ill be here forever)rimmi i will always be here",
    song: {
      title: "stay4ever",
      artist: "Powfu",
      spotifyUrl: "https://open.spotify.com/track/2h0FPaYBXNaBNh50W8m3Hc?si=b7c409f262f74ba3",
    }
  },{
    quote: "me and u look PERFECT",
    song: {
      title: "would look perfect",
      artist: "Powfu",
      spotifyUrl: "https://open.spotify.com/track/2L2mNkEWo818IE4fKbnP0O?si=56f978ea0f654f92",
    }
  },
  {
    quote: "i love the way that you see me",
    song: {
      title: "the way that you see me",
      artist: "Powfu",
      spotifyUrl: "https://open.spotify.com/track/0k2bhZ9oM3boyUWaV3MfWk?si=96484f610ef0444c",
    }
  },
  {
    quote: "u have a cute face which never goes away from my mind :)",
    song: {
      title: "met at a party",
      artist: "Powfu",
      spotifyUrl: "https://open.spotify.com/track/6lolmparasWzec5kcrmoej?si=8ec9915f95cf4501",
    }
  },
  {
    quote: "u already know my words before i speak <3",
    song: {
      title: "are u ok?",
      artist: "Powfu",
      spotifyUrl: "https://open.spotify.com/track/2U8tH2LXMh5EQvI6oBhSHJ?si=6b3ab3c62bf94990",
    }
  },
  {
    quote: "you are my everything rimmi",
    song: {
      title: "Die For u",
      artist: "Weeknd",
      spotifyUrl: "https://open.spotify.com/track/4W4fNrZYkobj539TOWsLO2?si=6d6e8398cf8d4586",
    }
  },
  {
    quote: "RIMMI AND AMAN WERE BORN TO DIE",
    song: {
      title: "Born to Die",
      artist: "LDR",
      spotifyUrl: "https://open.spotify.com/track/4Ouhoi2lAhrLJKFzUqEzwl?si=b04a576d47074fbf",
    }
  },
  {
    quote: "i will leave you till the ene ",
    song: {
      title: "blue jeans",
      artist: "LDR",
      spotifyUrl: "https://open.spotify.com/track/4RyK6N4IQ85xxLgguQAFH5?si=7d03855d094e44cf",
    }
  },
  

];
const DailyInspiration = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    checkDayAndTime();
  }, []);

  // Function to check the day and enable button based on 24-hour time
  const checkDayAndTime = async () => {
    try {
      const lastActiveTime = await AsyncStorage.getItem('lastActiveTime');
      const currentTime = Date.now();

      if (lastActiveTime) {
        const timeDifference = currentTime - parseInt(lastActiveTime);
        const hoursPassed = timeDifference / (1000 * 60 * 60);

        if (hoursPassed >= 24) {
          // Enable button for next day
          const storedDay = await AsyncStorage.getItem('currentDay');
          setCurrentDay(parseInt(storedDay) || 1);
          setButtonEnabled(true);
        } else {
          setButtonEnabled(false);
        }
      } else {
        setButtonEnabled(true); // First-time use
      }
    } catch (error) {
      console.error("Error retrieving lastActiveTime: ", error);
    }
  };

  const handleNextDay = async () => {
    const newDay = currentDay + 1;
    setCurrentDay(newDay);
    setButtonEnabled(false); // Disable the button for 24 hours
    await AsyncStorage.setItem('currentDay', newDay.toString());
    await AsyncStorage.setItem('lastActiveTime', Date.now().toString());
  };

  const openSpotify = () => {
    const spotifyUrl = inspirationData[currentDay - 1]?.song?.spotifyUrl;
    if (spotifyUrl) {
      Linking.openURL(spotifyUrl); // Open Spotify link
    }
  };

  const currentInspiration = inspirationData[currentDay - 1] || {};

  return (
    <ImageBackground
      source={require('./../assets/bg.jpeg')} // Change this to your background image path
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Glass effect card for the inspiration quote */}
        <View style={styles.glassCard}>
          <Text style={styles.quoteText}>{currentInspiration.quote || "Loading..."}</Text>
        </View>

        {/* Button for the next day inspiration */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonEnabled ? '#ff7f50' : 'gray' }]}
          onPress={handleNextDay}
          disabled={!buttonEnabled}
        >
          <Text style={styles.buttonText}>{`Day ${currentDay}`}</Text>
        </TouchableOpacity>

        {/* Song of the Day card */}
        <View style={styles.songCard}>
          <Text style={styles.songText}>Song of the Day:</Text>
          <Text style={styles.songTitle}>{currentInspiration?.song?.title || "No Song"}</Text>
          <Text style={styles.songArtist}>by {currentInspiration?.song?.artist || "Unknown"}</Text>

          {/* Button to open Spotify */}
          <TouchableOpacity style={styles.spotifyButton} onPress={openSpotify}>
            <Text style={styles.spotifyButtonText}>Listen on Spotify</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    padding: 20,
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect background
    padding: 20,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.4)', // Border for depth
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 30, // Spacing between cards
  },
  quoteText: {
    fontSize: 24,
    color: '#fbe3e8',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  buttonText: {
    color: '#fbe3e8',
    fontSize: 18,
    fontWeight: '600',
  },
  // Song of the Day card
  songCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
    padding: 20,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.4)', // Border for depth
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 30,
    alignItems: 'center',
  },
  songText: {
    fontSize: 18,
    color: '#fbe3e8',
    marginBottom: 10,
    fontWeight: '600',
  },
  songTitle: {
    fontSize: 20,
    color: '#fbe3e8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  songArtist: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  spotifyButton: {
    backgroundColor: '#1DB954', // Spotify green color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  spotifyButtonText: {
    color: '#fbe3e8',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DailyInspiration;
