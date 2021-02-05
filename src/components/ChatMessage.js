import React from 'react'
import app from "../components/config/fbConfig";
const auth = app.auth();

const ChatMessage = (props) => {
    const { text, uid, } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
       
        <p>{text}</p>
      </div>
    </>)
  }

export default ChatMessage
