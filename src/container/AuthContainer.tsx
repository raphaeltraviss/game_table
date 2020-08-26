import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

import LoginForm from '../component/LoginForm';
import FirebaseErrorMessage from '../component/FirebaseErrorMessage';


export default function AuthContainer() {
  const [didInitialize, setDidInitialize] = useState(false);
  const [user, setUser] = useState(null);
  const [firebaseAuthError, setFirebaseAuthError] = useState(null);

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
        setFirebaseAuthError(null);
      })
      .catch(setFirebaseAuthError);
  };

  const createAndOrLoginUser = (email: string, password: string) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setFirebaseAuthError(null);
      })
      .catch(setFirebaseAuthError);
  };


  if (!didInitialize) return null;
                            
  return (
    <View>
      { user && <Text>Welcome, {user.email}</Text> }
      <LoginForm
        user={user}
        loginAction={createAndOrLoginUser}
        logoutAction={logOut}
      /> 
      <FirebaseErrorMessage error={firebaseAuthError} />
    </View>

  );

}
