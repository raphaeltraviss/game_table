import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, TextInput, Button } from 'react-native';


export default function LoginForm(props: LoginFormProps) {
  const { register, handleSubmit, setValue, errors } = useForm();

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

  const inputEmail = (input: string) => {
    setValue('email', input);
  }
  const inputPassword = (input: string) => {
    setValue('password', input);
  }

  const login = () => {
    props.loginAction('someemail@something.com', 'somepassword');
  }

  return (
    <View>
      <View>
        <Text>Email</Text>
        <TextInput onChangeText={inputEmail} />
        { errors.email && errors.email.message }
      </View>
      <View>
        <Text>Password</Text>
        <TextInput onChangeText={inputPassword} />
        { errors.password && errors.password.message }
      </View>
      <Button
        onPress={handleSubmit(login)}
        title="Log In"
        color="gainsboro"
        accessibilityLabel="Log in to your account on this device"
      />
    </View>
  )
}
