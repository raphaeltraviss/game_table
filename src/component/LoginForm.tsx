import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, TextInput, Button } from 'react-native';

import tw from 'tailwind-rn';


export default function LoginForm(props: LoginFormProps) {
  const { register, handleSubmit, setValue, errors } = useForm();

  const formStyle = tw('flex-col p-6 w-full');
  const formFieldStyle = tw('p-4 mt-4 mb-4 rounded-lg bg-white w-full');
  const inputLabelStyle = tw('text-xs uppercase mb-2 text-gray-700');
  const inputStyle = tw('p-2 border-b-2 border-gray-400 text-lg rounded-sm bg-gray-100');

  useEffect(() => {
    register("email", {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "The email address must contain the @ and the domain",
      }
    });
    register("password", {
      required: {
        value: true,
        message: 'Please enter a password',
      },
      minLength: {
        value: 8,
        message: 'Please use at least eight characters',
      },
    });
  }, [register]);

  if (props.user) {
    return (
      <Button
        onPress={props.logoutAction}
        title="Log Out"
        color="#841584"
        accessibilityLabel="Log out of your account on this device"
      />
    );
  }

  const inputEmail = (input: string) => {
    setValue('email', input);
  }
  const inputPassword = (input: string) => {
    setValue('password', input);
  }

  const login = (formData: any) => {
    props.loginAction(formData.email, formData.password);
  }


  return (
    <View style={formStyle}>
      <View style={formFieldStyle}>
        <Text style={inputLabelStyle}>Email</Text>
        <TextInput
          style={inputStyle}
          onChangeText={inputEmail}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
        />
        { errors.email && <Text>{errors.email.message}</Text> }
      </View>
      <View style={formFieldStyle}>
        <Text style={inputLabelStyle}>Password</Text>
        <TextInput
          style={inputStyle}
          onChangeText={inputPassword}
          autoCapitalize="none"
          autoCompleteType="password"
          textContentType="password"
        />
        { errors.password && <Text>{errors.password.message}</Text> }
      </View>
      <Button
        onPress={handleSubmit(login)}
        title="Log In"
        accessibilityLabel="Log in to your account on this device"
      />
    </View>
  )
}
