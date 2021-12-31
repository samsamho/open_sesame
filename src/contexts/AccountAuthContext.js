import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AccountAuthContext = createContext();

const AccountAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  return (
      <AccountAuthContext.Provider
          value={{
            user,
            loading,
            login: async (email, password) => {
              console.log(email, password)
            },
            register: async (displayName, email, password) => {
              setLoading(true);
              const auth = getAuth();
              let obj = {}
              await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  obj.userCredential = userCredential
                  setUser(userCredential.user)
                })
                .catch((error) => {
                  obj.error = error
                });
              setLoading(false);
              return obj
            },
            logout: async () => {

            },
          }}
      >
        {children}
      </AccountAuthContext.Provider>
  );
};

export default AccountAuthContextProvider