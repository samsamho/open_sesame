import React, { createContext, useState } from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player'

export const VoiceAuthContext = createContext();

const VoiceAuthContextProvider = ({ children }) => {
  const [recording, setRecording] = useState(false)
  const [recordSecs, setRecordSecs] = useState()
  const [recordTime, setRecordTime] = useState()

  const audioRecorderPlayer = new AudioRecorderPlayer()

  const onStartRecord = async () => {
    setRecording(true)
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordSecs(e.currentPosition)
      setRecordTime(audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
      )
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0)
    console.log(result);
    setRecording(false)
  };

  return (
      <VoiceAuthContext.Provider
          value={{
            recording,
            recordSecs,
            recordTime,
            onStartRecord,
            onStopRecord
          }}
      >
        {children}
      </VoiceAuthContext.Provider>
  );
};

export default VoiceAuthContextProvider
