import 'react-native-gesture-handler'; // add this line at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // import this
import Home from './src/screens/Home.tsx';
import Explore from './src/screens/Explore.tsx';
import Notes from './src/screens/Notes.tsx';
import DailyInspiration from './src/screens/DailyInspiration.tsx';
import TriviaChallenge from './src/screens/TriviaChallenge.tsx';
import SnakeGame from './src/screens/SnakeGame.tsx';
import BookScreen from './src/screens/BookScreen.tsx';
import VirtualPetScreen from './src/screens/VirtualPetScreen.tsx';
import BirthdaySpecialScreen from './src/screens/BirthdaySpecialScreen.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }} // Hide the navigation bar for Explore screen
          />
          <Stack.Screen 
            name="Explore" 
            component={Explore} 
            // Hide the navigation bar for Explore screen
          />
          <Stack.Screen name="Notes" component={Notes} options={{ headerShown: false }} />
          <Stack.Screen name="DailyInspiration" component={DailyInspiration} options={{ headerShown: false }}/>
  
          <Stack.Screen name="TriviaChallenge" component={TriviaChallenge} options={{ headerShown: false }}/>
          <Stack.Screen name="VirtualPetScreen" component={VirtualPetScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SnakeGame" component={SnakeGame} options={{ headerShown: false }}/>
          <Stack.Screen name="BookScreen" component={BookScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BirthdaySpecialScreen" component={BirthdaySpecialScreen} options={{ headerShown: false }} />
  
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
