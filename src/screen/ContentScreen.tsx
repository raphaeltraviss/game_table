import React from 'react';
import { View, Text, Button } from 'react-native';
import LoginForm from '../component/LoginForm';
import auth from '@react-native-firebase/auth';



// @TODO: all components should handle init, auth, and Firebase
// error states gracefully.
export default function ContentScreen(props: any) {
  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));

    props.navigation.navigate('Auth');
  };

  return (
    <View>
      <Text>This is the main content</Text>
      <Button
        onPress={logOut}
        title="Log Out"
        color="#841584"
        accessibilityLabel="Log out of your account on this device"
      />
    </View>
  )
}
