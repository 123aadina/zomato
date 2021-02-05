import React, { useState, useContext, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../context/AuthContext";
import app from "../components/config/fbConfig";
const auth = app.auth();
const db = app.firestore();



const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ChatRoom = ({auth}) => {
  const { currentUser, addToUsersDb } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  
  const classes = useStyles();

   console.log(addToUsersDb)
   console.log(currentUser)

  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    /* const { currentUser.uid } = auth && auth.currentUser; */
    const { uid } = auth && auth.currentUser;
   /*  || {} */
   /*  console.log(uid) */
   /* addToUsersDb(uid) */
    
    const messagesRef = app.collection("user");
    const query = messagesRef.orderBy("createdAt").limit(25);

    await messagesRef.add({
     /* name:displayName, */
      text: msg,
      createdAt: db.firestore.FieldValue.serverTimestamp(),
      uid,
    });

    setMsg("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };


  const getMasseges = () => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });
  };

  useEffect(() => {
    getMasseges();
  }, []);

  const updateTextFields = (e) => {
    e.preventDefault();
    console.log("updateTextFields", e.target.value);
    setMsg(e.target.value);
  };
  return (
    <div>
      <h1>Chat app</h1>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
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



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

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
