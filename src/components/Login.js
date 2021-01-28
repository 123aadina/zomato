import React, { useContext } from "react";
import {  Redirect } from "react-router";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../context/AuthContext";
import app from "../components/config/fbConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));



const Login = ({history}) => {

    const classes = useStyles(); 

    const handleLogin = (
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
      }

  return (
    <div>
      <h1>welcome to our page</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" name="email" type="email" label="email" />
        <TextField id="standard-basic" name="password" type="password" label="password" />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Login;
