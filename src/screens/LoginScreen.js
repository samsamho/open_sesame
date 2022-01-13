import React, { useContext, useState } from 'react';
import { Alert, Dimensions, StyleSheet, View } from 'react-native';
import { Button, Text, Title, TextInput } from 'react-native-paper';

import { AccountAuthContext } from '../contexts/AccountAuthContext'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginText, setLoginText] = useState('');

  const { login } = useContext(AccountAuthContext)

  const handleLogin = () => {
    login(email, password).then(({ userCredential, errorCode, errorMessage }) => {
      if (userCredential) {
        navigation.navigate('Message')
      }
      else {
        switch (errorCode) {
          case "auth/email-already-in-use":
            setLoginText("This email is already registered! If you forgot your password, please reset your password in the login page.")
            break
          default:
            setLoginText("Login failed: " + errorMessage + " (Error Code: " + errorCode + ")")
        }
      }
    })
  }

  return (
      <View style={styles.container}>
        <Title style={styles.titleText}>Welcome!</Title>
        <TextInput
            label="Email"
            style={styles.input}
            value={email}
            numberOfLines={1}
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
        />
        <TextInput
            label="Password"
            style={styles.input}
            value={password}
            numberOfLines={1}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
        />
        <Button
            mode="contained"
            style={styles.button}
            contentStyle={styles.buttonContainer}
            labelStyle={styles.loginButtonLabel}
            onPress={() => {
              // if (email && password)
              //   handleLogin()
              // else
              //   setLoginText("Please enter both email and password!")
              navigation.navigate('Message')
            }}
        > Login </Button>
        <Text>{ loginText }</Text>
        <Button
            mode="text"
            uppercase={false}
            style={styles.button}
            contentStyle={styles.buttonContainer}
            labelStyle={styles.navButtonText}
            onPress={() => navigation.navigate('Signup')}
        > Sign up here </Button>
        <Button
            mode="text"
            uppercase={false}
            style={styles.button}
            contentStyle={styles.buttonContainer}
            labelStyle={styles.navButtonText}
            onPress={() => navigation.navigate('VoiceEnroll')}
        > Temporary Dev Button (for SV Enroll) </Button>
        <Button
            mode="text"
            uppercase={false}
            style={styles.button}
            contentStyle={styles.buttonContainer}
            labelStyle={styles.navButtonText}
            onPress={() => navigation.navigate('VoiceVerification')}
        > Temporary Dev Button (for SV Auth) </Button>
      </View>
  );
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  buttonContainer: {
    width: width / 3,
    height: height / 15,
  },
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: width / 2,
    height: height / 15,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
});
