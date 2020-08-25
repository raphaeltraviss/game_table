import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, TextInput, Button } from 'react-native';


export default function LoginForm(props: LoginFormProps) {
  if (!props.user) {
    return (
      <Button
        onPress={props.logoutAction}
        title="Log Out"
        color="#841584"
        accessibilityLabel="Log out of your account on this device"
      />
    );
  }

  const login = () => {
    props.loginAction('someemail@something.com', 'somepassword');
  }

  return (
    <View>
      <View>
        <Text>Email</Text>
        <TextInput />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput />
      </View>
      <Button
        onPress={login}
        title="Log In"
        color="gainsboro"
        accessibilityLabel="Log in to your account on this device"
      />
    </View>
  )
}
