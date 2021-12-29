import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, Title, TextInput } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <View style={styles.container}>
        <Title style={styles.titleText}>Welcome!</Title>
        <TextInput
            label="Email"
            style={styles.input}
            value={email}
            numberOfLines={1}
            autoCapitalize="none"
            onChangeText={(userEmail) => setEmail(userEmail)}
        />
        <TextInput
            label="Password"
            style={styles.input}
            value={password}
            numberOfLines={1}
            secureTextEntry={true}
            onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <Button
            mode="contained"
            style={styles.input}
            labelStyle={styles.loginButtonLabel}
            onPress={() => {}}
            style={styles.button}
            contentStyle={styles.buttonContainer}
        > Login </Button>
        <Button
            mode="text"
            uppercase={false}
            labelStyle={styles.navButtonText}
            onPress={() => navigation.navigate('Signup')}
            style={styles.button}
            contentStyle={styles.buttonContainer}
        > Sign up here </Button>
      </View>
  );
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  buttonContainer: {
    width: width / 2,
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
    width: width / 1.5,
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
