import React, { useEffect, useState } from "react";
import app from "../components/config/fbConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [pending, setPending] = useState(true);

  useEffect(() => {

    if(app){
      console.log('app', app)
          app.auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    }); 

    }

  }, [app]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
