import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-rn';

import AuthScreen from './screen/AuthScreen';
import ContentScreen from './screen/ContentScreen';



const Stack = createStackNavigator();

export default function App() {
  const containerStyle = tw('flex-1 justify-center items-center bg-white');

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Content" component={ContentScreen} />
        </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

