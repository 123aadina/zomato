import React, { useEffect, useState } from "react";
import app from "../components/config/fbConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (app) {
      console.log("app", app);
      const authListener = app.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
        console.log('user', user)
        setPending(true);
      });
      return authListener;
    }
   
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
