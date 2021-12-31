import React, { useContext, useState } from 'react';
import { Alert, Dimensions, StyleSheet, View } from 'react-native';
import { Button, Title, TextInput } from 'react-native-paper';

import { AccountAuthContext } from '../contexts/AccountAuthContext'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AccountAuthContext)

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
              login(email, password)
            }}
        > Login </Button>
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
            onPress={() => navigation.navigate('Voiceprint')}
        > Temporary Dev Button (for SV) </Button>
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
  navButtonText: {
    fontSize: 16,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
});
