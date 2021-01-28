import React from "react";
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

const Register = ({history}) => {


  const classes = useStyles();


  /* const handleSignUp = (e) => {
    console.log("sign in")
  } */



  const handleSignUp = (async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" name="email" type="email" label="email" />
        <TextField id="standard-basic" name="password" type="password" label="password" />
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
