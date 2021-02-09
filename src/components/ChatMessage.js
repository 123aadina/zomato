import React from 'react'
import firebase from "../components/config/fbConfig";
const auth = firebase.auth();


const ChatMessage = (props) => {
  console.log(props)
  /* console.log(props.currentUser.uid) */
  /* console.log(props.message.uid) */
    const {  text, uid, } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>)
  }

export default ChatMessage
