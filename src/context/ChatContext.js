import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useHistory } from "react-router-dom";

// 2 create config.js, import and gitignore
import firebase from "../components/config/fbConfig";

const initContext = {
  messages: [],
  getMessages: () => {
    throw new Error("getMessages() not implemented");
  },
  writeMessages: () => {
    throw new Error("writeMessages() not implemented");
  },
};

//update router and wrap auth provider

export const ChatContext = createContext(initContext);

export const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState(initContext.messages);
  let history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const db = firebase.firestore();

  useEffect(() => {
    getMessages();
  }, []);

  const writeMessages = async (msg) => {
    console.log(currentUser);
    db.collection("messages")
      .add({
        displayName: currentUser.displayName,
        text: msg,
        createdAt: new Date(),
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    console.log(msg);
  };

  const getMessages = () => {
   
    db.collection("messages")
      .get()
      .then((querySnapshot) => {

        let chatMessages = [];

        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          console.log(`${doc.id} => ${doc.data()}`);

          chatMessages.push(doc.data());
        });
        console.log(chatMessages);
        setMessages(chatMessages);
      });
    
  };

  useEffect(() => {
    getMessages();
    console.log(messages);
  }, []);

  return (
    <ChatContext.Provider value={{ messages, getMessages, writeMessages }}>
      {children}
    </ChatContext.Provider>
  );
};
