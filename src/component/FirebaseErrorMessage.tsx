import React from 'react';
import { View, Text } from 'react-native';


export default function FirebaseErrorMessage(props: FirebaseErrorMessageProps) {
  const primaryMsg: {[K in FirebaseErrorCode]: string} = {
    'auth/email-already-in-use': 'That email is already in use, with a different password',
    'auth/invalid-email': 'That email address cannot be used by our system',
    'auth/operation-not-allowed': 'Anonymous login not allowed',
  }

  if (!props.error) return null;

  return (
    <View>
      <Text>{primaryMsg[props.error.code]}</Text>
    </View>
  );
}
