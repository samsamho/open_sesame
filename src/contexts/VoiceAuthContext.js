import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const VoiceAuthContext = createContext();

const VoiceAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
      <VoiceAuthContext.Provider
          value={1}
      >
        {children}
      </VoiceAuthContext.Provider>
  );
};

export default VoiceAuthContext
