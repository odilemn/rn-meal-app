import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  });
};

export default function App() {
  //return (
   // <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  //);
      
      const [fontLoaded, setFontLoaded] = useState(false);

      if (!fontLoaded) {
        return (
        <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} /> );
      };
      
      return (
        <MealsNavigator />
      );
}
