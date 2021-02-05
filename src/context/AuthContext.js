import React, { useEffect, useState } from "react";
import { useHistory ,Redirect} from "react-router-dom";
import app from "../components/config/fbConfig";
const db = app.firestore();

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [pending, setPending] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let history = useHistory();

  const handleSignUp = async ({ name}) => {
   
    try {
      await app.auth().createUserWithEmailAndPassword(currentUser.email, currentUser.password)
      ((userCredential)=> {
        let user = userCredential.user;
        console.log("user", user)

        setCurrentUser(user)
        setIsAuthenticated(true)

        db.collection("users").doc(currentUser.uid).set({
          name,
          //favorites: []
        });
       
      })
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };



   const handleLogin = async ({email, password}) => {
     
      console.log("email", email);
      try {
        await app.auth().signInWithEmailAndPassword(email, password)
        ((userCredential)=> {
          let user = userCredential.user;
          console.log("user", user)
  
          setCurrentUser(user)
          setIsAuthenticated(true)
       }) 
     }
      catch (error) {
        alert(error);
      }
    }; 
 
  /*   if (currentUser) {
      
        return <Redirect to="/" />;
      } */

      /*   {currentUser ? <p>Welcome {currentUser}</p> : <p>Not authenticated</p> } */


  const addToUsersDb = (userDb) => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        const userRef = db.collection("users").doc(user.uid);
        return userRef.update({
          send: app.firestore.FieldValue.arrayUnion(userDb),
        });
      } else {
        history.push('/login')
      }
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleSignUp,handleLogin,  addToUsersDb }}>
      {children}
    </AuthContext.Provider>
  );
};

/** useEffect(() => {
  const addToUsersDb = (user) => {  
      const authListener = app.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
        console.log('user', user)
        setPending(true);
      });
      return authListener;
    }
   
  }, []); */
