import React, { useState, useContext, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import firebase from "../components/config/fbConfig";
const auth = firebase.auth();
const db = firebase.firestore();



const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ChatRoom = ({auth}) => {
  const { currentUser , isAuthenticated} = useContext(AuthContext);
  const {messages, writeMessages } = useContext(ChatContext)
 //this currentUser is just user it does not show the name of the logged in user
  console.log(currentUser)

  const [msg, setMsg] = useState("");
  /* const [messages, setMessages] = useState([]); */
 /*  const [text, setText] = useState(""); */

  
  const classes = useStyles();
  const dummy = useRef();



  const sendMessage = async (e) => {
    e.preventDefault();
     //this currentUser is just user it does not show the name of the logged in user
   /*  const { uid } = auth.currentUser; */
    await writeMessages(msg)
    console.log(msg)
   setMsg("")
    /*  dummy.current.scrollIntoView({ behavior: "smooth" }); */
  };

  const updateTextFields = (e) => {
    e.preventDefault();
    setMsg(e.target.value);
    console.log(msg)
  };
  
  return (
    <div>
      <h1>Chat app</h1>
      <h1>{messages}</h1>
      
      <main>
      <h1>{msg}</h1>
           {messages.length &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        {/* <span ref={dummy}></span> */}
      </main>

      <form
        className={classes.root}
        onSubmit={sendMessage}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          name="text"
          type="text"
          label="text"
          value={msg}
          onChange={updateTextFields}
        />

        <Typography className={classes.divider} />
        <Button
          size="large"
          variant="contained"
          color="primary"
          type="submit"
          disabled={!msg}
        >
          send
        </Button>
      </form>
    </div>
  );
};

export default ChatRoom;

/*

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default App;*/



/*   const getMasseges = () => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          console.log(`${doc.id} => ${doc.data()}`); */
         /*  if (doc ) {
           querySnapshot.push(doc.data())
          } */
  /*       });
      });
  }; */
