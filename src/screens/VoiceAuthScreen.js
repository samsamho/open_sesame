import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, IconButton, Text, TextInput, Title } from 'react-native-paper';

import { VoiceAuthContext } from '../contexts/VoiceAuthContext'

export default function VoiceAuthScreen({ navigation }) {
  useContext(VoiceAuthContext)

  return (
      <View style={styles.container}>
        <Title style={styles.titleText}>Authenticate with your voice</Title>
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
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  navButton: {
    marginTop: 10,
  },
});
