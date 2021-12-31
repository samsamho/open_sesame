import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Button, IconButton,Title } from 'react-native-paper'

import { VoiceAuthContext } from '../contexts/VoiceAuthContext'


export default function VoiceEnrollScreen({ navigation }) {
  // const { audioRecorderPlayer, recording, recordSecs, recordTime, onStartRecord, onStopRecord } = useContext(VoiceAuthContext)

  return (
      <View style={styles.container}>
        <Title style={styles.titleText}>Enroll your voiceprint</Title>
        <Text style={styles.instructions}>Press the button below to start recording your voice.</Text>
        <Text style={styles.instructions}>Press the button again to stop recording.</Text>
        <Text style={styles.instructions}>Your voice will be saved in your account.</Text>
        <TouchableOpacity style={styles.recordOverlay} >
          <Button
            mode="contained"
            style={styles.recordButton}
            labelStyle={styles.recordButtonLabel}
            onPress={() => recording ? onStopRecord() : onStartRecord()}
          >{recording ? "Stop" : "Start"}</Button>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    margin: 10,
    fontSize: 18,
  },
  recordButton: {
    width: 100,  
    height: 100,   
    borderRadius: 50,
    backgroundColor: '#00ffff',
    position: 'absolute',
  },
  recordButtonLabel: {
    paddingTop: 33,
    color: '#000000',
  },
  recordOverlay: {
    width:100,
    height:100,
    borderRadius:50,
    borderWidth: 1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
  },
  titleText: {
    fontSize: 32,
    marginBottom: 10,
  },
  navButton: {
    marginTop: 10,
  },
});
