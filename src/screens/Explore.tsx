import React from 'react';
import { View, FlatList, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video'; // Ensure you have the video component available

const reelsData = [
  {
    id: '1',
    source: require('./../assets/Video-748.mp4'), // Path to your video files
  },
  {
    id: '2',
    source: require('./../assets/Video-748.mp4'), // Path to your video files
  },

  // Add more reels as needed
];

const { height, width } = Dimensions.get('window'); // Get the screen dimensions

const Explore = () => {
  const renderReel = ({ item }) => (
    <View style={styles.reelContainer}>
      <Video
        source={item.source}
        style={styles.video}
        controls={false} // Show video controls (play, pause, etc.)
        resizeMode="cover" // Change to cover to fill the space
        onError={(e) => console.error("Video Error: ", e)} // Handle video errors
      />
    </View>
  );

  return (
    <ImageBackground 
   source={require('./../assets/bg.jpeg')} // Change this to your background image path
       style={styles.background}
      imageStyle={styles.image}
    >
      <FlatList
        data={reelsData}
        keyExtractor={item => item.id}
        renderItem={renderReel}
        showsVerticalScrollIndicator={false} // Hide the scroll indicator for a cleaner look
        pagingEnabled={true} // Enable paging for the full-screen effect
        contentContainerStyle={styles.listContainer}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
 
  listContainer: {
    paddingBottom: 20,
  },
  reelContainer: {
    width: width, // Full width of the screen
    height: height, // Full height of the screen
  },
  video: {
    width: '100%',
    height: '100%', // Make the video take up the full height of the reelContainer
  },
});

export default Explore;
