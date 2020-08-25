import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';



export default function AuthContainer() {
  const [didInitialize, setDidInitialize] = useState(false);
  const [user, setUser] = useState(null);

  // @TODO: Firebase auth user type information?
  function handleUserAuth(user: any) {
    setUser(user);
    if (!didInitialize) setDidInitialize(true);
  }

  useEffect(() => {
    const authRegisterUnregister = auth().onAuthStateChanged(handleUserAuth);
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
      });

    return authRegisterUnregister;
  });

  if (!didInitialize) return null;

  if (user === null) {
    return <View><Text>Login</Text></View>
  }

  return (
    <View>
      { (user != null) ?
        <Text>Welcome, {user.email}</Text>
        :
        <Text>Login</Text> 
      }
    </View>

  );

}
