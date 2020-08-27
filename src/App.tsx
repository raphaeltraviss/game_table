import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthContainer from './container/AuthContainer';
import { NavigationContainer } from '@react-navigation/native';


import tw from 'tailwind-rn';



export default function App() {
  const containerStyle = tw('flex-1 justify-center items-center bg-white');

  return (
    <NavigationContainer>
      <View style={containerStyle}>
        <AuthContainer />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

