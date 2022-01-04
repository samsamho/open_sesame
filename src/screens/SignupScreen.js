import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, IconButton, Text, TextInput, Title } from 'react-native-paper';

import { AccountAuthContext } from '../contexts/AccountAuthContext'


export default function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [signupText, setSignupText] = useState('');

  const { register } = useContext(AccountAuthContext)

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
    register(displayName, email, password1).then(({ userCredential, errorCode, errorMessage }) => {
      if (userCredential) {
        setSignupText("Sign up success. Please check your email for verification.")
      }
      else {
        switch (errorCode) {
          case "auth/email-already-in-use":
            setSignupText("This email is already registered! If you forgot your password, please reset your password in the login page.")
            break
          default:
            setSignupText("Signup failed: " + errorMessage + " (Error Code: " + errorCode + ")")
        }
      }
    })
  }

  return (
      <View style={styles.container}>
        <Title style={styles.titleText}>Sign up new account</Title>
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
            labelStyle={styles.signupButtonLabel}
            onPress={async () => {
              if (validateEmail() && validatePassword())
                handleRegister()
            }}
        >Sign Up</Button>
      </View>
  );
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
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
  signupButtonLabel: {
    fontSize: 22,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
});
