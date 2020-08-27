import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthContainer from './container/AuthContainer';
import MainContent from './container/MainContent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import tw from 'tailwind-rn';


const Stack = createStackNavigator();

export default function App() {
  const containerStyle = tw('flex-1 justify-center items-center bg-white');

  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen name="Auth" component={AuthContainer} />
            <Stack.Screen name="Main" component={MainContent} />
          </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

