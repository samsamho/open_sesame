import React, { createContext, useState } from 'react';

import { firebase } from '../firebase';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
      <AuthContext.Provider
          value={{
            user,
            loading,
            login: async (email, password) => {
              console.log(email, password)
            },
            register: async (displayName, email, password) => {
              setLoading(true);

              try {
                await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((credential) => {
                  credential.user
                  .updateProfile({ displayName: displayName })
                  .then(async () => {

                  });
                });
              } catch (e) {
                console.log(e);
              }
              setLoading(false);
            },
            logout: async () => {

            },
          }}
      >
        {children}
      </AuthContext.Provider>
  );
};
