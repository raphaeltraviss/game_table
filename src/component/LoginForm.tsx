import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, TextInput } from 'react-native';


export default function LoginForm(props: LoginFormProps) {
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
    </View>
  )
}
