import { createContext, useState, useEffect } from "react";

import { onAuthStatChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };


  useEffect(() => {
    const unsubscribe = onAuthStatChangedListener((user)=>{
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])
  

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};