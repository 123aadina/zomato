import React, { useState, useContext, useRef } from "react";
import ChatMessage from "./ChatMessage";
// material
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
//context
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
//farebase
import firebase from "../components/config/fbConfig";
const auth = firebase.auth();
const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));

const ChatRoom = () => {
  const { currentUser, isAuthenticated } = useContext(AuthContext);
  const { messages, writeMessages } = useContext(ChatContext);
  //this currentUser is just user it does not show the name of the logged in user
  console.log(currentUser);

  const [msg, setMsg] = useState("");
  const classes = useStyles();
  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    //this currentUser is just user it does not show the name of the logged in user
    const { uid } = currentUser;
    await writeMessages(msg);
    console.log(msg);
    setMsg("");
    /*  dummy.current.scrollIntoView({ behavior: "smooth" }); */
  };

  const updateTextFields = (e) => {
    e.preventDefault();
    setMsg(e.target.value);
  };
  console.log(messages);
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          chat
        </Typography>
        <List className={classes.list}>
          {isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
          {messages ? (
            messages.map((message, index, person) => {
              return (
                <React.Fragment key={index}>
                  {/*  {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                    {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>} */}
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={message.text}
                      secondary={message.displayName}
                    />
                  </ListItem>
                </React.Fragment>
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
          <span ref={dummy}></span>
        </List>
      </Paper>
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
    </React.Fragment>
  );
};

export default ChatRoom;
