import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Typography} from '@material-ui/core';
import { AuthContext } from "../context/AuthContext";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const {  handleSignUp } = useContext(AuthContext);



  return (
    <div>
      <h1>Sign up</h1>
      
      <form className={classes.root} onSubmit={() => handleSignUp} noValidate autoComplete="off">
      <TextField
          id="standard-basic"
          name="name"
          type="text"
          label="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="standard-basic"
          name="email"
          type="text"
          label="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="standard-basic"
          name="password"
          type="text"
          label="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
         <Typography className={classes.divider} />
        <Button
          size="large"
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      
    </div>
  );
};

export default Register;



/* const [state, setState] =useState({email:'', password:""}); */
/**const handelChange = (e) => {
 * setState({ ...state, [e.target.value]: e.target.value})
 *  setState({ ...state, [e.target.name]: e.target.value})
 * }
 *  */