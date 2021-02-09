import React, { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
/* import { useCollectionData } from 'react-firebase-hooks/firestore'; */
import firebase from "../components/config/fbConfig";
const db = firebase.firestore();

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  /* const [messages, setMessages] = useState([]); */
  /*  const [user] = useAuthState(auth); */

  let history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser({ email: user.email, displayName: user.displayName });
        setIsAuthenticated(true);
      } else {
        // No user is signed in.
      }
    });
  }, []);

  const handleSignUp = async ({ name, email, password }) => {
    console.log(password, "password");
    console.log(name, "name");
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      //userCredential is just user it not printing the name of the user
      console.log(userCredential, "userCredential");

      let user = userCredential.user;
      console.log(userCredential.user, "userCredential");
      //user is just user it not printing the name of the user
      console.log("user", user);

      // Add a new document in collection "users"
      await user.updateProfile({
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      });
      // Update successful.
      setCurrentUser({ email: user.email, displayName: user.displayName });
      setIsAuthenticated(true);
    } catch (error) {
      console.log("error", error);
      // An error happened.
    }
  };

  const handleLogin = async ({ email, password }) => {
    console.log("email", email);

    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      let user = userCredential.user;
      console.log("user", user);

      setCurrentUser(user);
      setIsAuthenticated(true);
      history.push("/chatRoom");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleSignUp, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

/* Create user */
/** 
firebase.auth().createUserWithEmailAndPassword(email, password, nickName)
.then(() => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: nickName
    });
 })
.catch(e => {
    console.log(e.code, e.message);
});*/

/* which then fires the function */

/**firebase.auth().onAuthStateChanged((user) => {
if (user) {
store.dispatch(login(user.uid, user.displayName));
} else {
store.dispatch(logout());
}
})
 */
