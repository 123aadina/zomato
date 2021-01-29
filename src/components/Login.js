import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
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

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    /*  const { email, password } = event.target.elements; */
    console.log("email", email);
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>welcome to our page</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          name="email"
          type="email"
          label="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="standard-basic"
          name="password"
          type="password"
          label="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
