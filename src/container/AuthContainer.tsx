import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

import LoginForm from '../component/LoginForm';


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

    return authRegisterUnregister;
  });

  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const anonymousLogin = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  const createAndOrLoginUser = () => {
    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        // @TODO: extract to error handler/logger
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };


  if (!didInitialize) return null;
                            
  return (
    <View>
      { (user != null) ?
        <Text>Welcome, {user.email}</Text>
        :
        <LoginForm submitAction={() => console.log("login attempt")} /> 
      }
      <Button
        onPress={logOut}
        title="Log Out"
        color="#841584"
        accessibilityLabel="Log out of your account on this device"
      />
    </View>

  );

}
