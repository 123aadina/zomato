import React, { useState, useContext, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// new code
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import firebase from "../components/config/fbConfig";
const auth = firebase.auth();
const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

const ChatRoom = ({ auth }) => {
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
    /*  const { uid } = auth.currentUser; */
    await writeMessages(msg);
    console.log(msg);
    /*   setMsg(""); */
    /*  dummy.current.scrollIntoView({ behavior: "smooth" }); */
  };

  const updateTextFields = (e) => {
    e.preventDefault();
    setMsg(e.target.value);
    /* console.log(msg); */
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
          {/* <h1>{msg}</h1>
        {isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
        {messages ? (
          messages.map((message, id, primary, secondary, person ) => {
            <React.Fragment key={id}>
              <div>
                <div>{message.displayName}</div>
               <h6>{message.timestamp.toString()}</h6>  
                <p>{message.text}</p>
              </div>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
         <span ref={dummy}></span> */}
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
    </React.Fragment>
  );
};
/*  <main>
        <h1>{msg}</h1>
        {isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
        {messages ? (
          messages.map((message, index) => {
            return (
              <div>
                <div>{message.displayName}</div>
               <h6>{message.timestamp.toString()}</h6> 
                <p>{message.text}</p>
              </div>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
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
}; */

export default ChatRoom;

/**
 * <ChatMessage key={msg.id} message={msg} />
 */

/**
  * import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import BufferList from './BufferList';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  appBarTitle: {
    flexGrow: 1
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

const Chat = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar} color="default">
        <Toolbar>
          <Typography variant="h6" noWrap>
            #geheimorganisation
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        variant="permanent"
      >
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.appBarTitle} variant="h6" noWrap>
              WeeChat
            </Typography>
            <IconButton color="inherit" edge="end">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <BufferList />
      </Drawer>
    </React.Fragment>
  );
};

export default Chat;

  */

/**
   * <div>
      <h1>Chat app</h1>

      <main>
        <h1>{msg}</h1>
        {isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
        {messages ? (
          messages.map((message, index) => {
            return (
              <div>
                <div>{message.displayName}</div>
                 <h6>{message.timestamp.toString()}</h6>
                <p>{message.text}</p>
              </div>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
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
   */

/** <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */
