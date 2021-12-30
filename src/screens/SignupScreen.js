import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, IconButton, Text, TextInput, Title } from 'react-native-paper';

import { AuthContext } from '../contexts/AuthContext'


export default function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [signupText, setSignupText] = useState('');

  const { register } = useContext(AuthContext)

  const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setSignupText("Please enter a valid email address.")
      return false;
    } else {
      setSignupText("")
      return true;
    }
  }

  const validatePassword = () => {
    if (password1 !== password2) {
      setSignupText("Your passwords do not match.")
      return false
    } else {
      setSignupText("")
      return true;
    }
  }

  const handleRegister = () => {
    register(displayName, email, password1).then(({ userCredential, error }) => {
      if (userCredential) {
        setSignupText("Sign up success. Please check your email for verification.")
      }
      else {
        switch (error.code) {
          case "auth/email-already-in-use":
            setSignupText("This email is already registered! If you forgot your password, please reset your password in the login page.")
            break
          default:
            setSignupText("Signup failed: " + error.code)
        }
      }
    })
  }

  return (
      <View style={styles.container}>
        <Title style={styles.titleText}>Let's get started!</Title>
        <TextInput
            label="Display Name"
            style={styles.input}
            value={displayName}
            autoCapitalize="none"
            onChangeText={(displayName) => setDisplayName(displayName)}
        />
        <TextInput
            label="Email"
            style={styles.input}
            value={email}
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
        />
        <TextInput
            label="Password"
            style={styles.input}
            value={password1}
            secureTextEntry={true}
            onChangeText={(password1) => setPassword1(password1)}
        />
        <TextInput
            label="Confirm Password"
            style={styles.input}
            value={password2}
            secureTextEntry={true}
            onChangeText={(password2) => setPassword2(password2)}
        />
        <Text>{ signupText }</Text>
        <Button
            mode="contained"
            style={styles.button}
            contentStyle={styles.buttonContainer}
            labelStyle={styles.loginButtonLabel}
            onPress={async () => {
              if (validateEmail() && validatePassword())
                handleRegister()
            }}
        >Sign Up</Button>
        <IconButton
            color="#5b3a70"
            onPress={() => navigation.goBack()}
            icon="keyboard-backspace"
            size={30}
            style={styles.navButton}
        />
      </View>
  );
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  formButton: {
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
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
});
