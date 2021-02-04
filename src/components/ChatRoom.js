import React, {useState} from "react";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ChatRoom = () => {
  const [msg, setMsg] = useState("");
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object" , e.target.value)
  };

  return (
    <div>
      <h1>Chat app</h1>

      <form
        className={classes.root}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          name="name"
          type="name"
          label="name"
          onChange={(event) => setMsg(event.target.value)}
        />

        <Typography className={classes.divider} />
        <Button size="large" variant="contained" color="primary" type="submit">
          send
        </Button>
      </form>
    </div>
  );
};

export default ChatRoom;
