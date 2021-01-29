import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import app from "../components/config/fbConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Register = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSignUp = async (event) => {
    event.preventDefault();
    /* const { email, password } = event.target.elements; */
    console.log("email", email);
    


    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Sign up</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          name="email"
          type="email"
          label="email"
          /* value="email" */
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="standard-basic"
          name="password"
          type="text"
          label="password"
          /*  value="password" */
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
