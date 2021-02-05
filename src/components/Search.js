import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { RestaurantContext } from "../context/RestaurantContext";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Search = () => {
  const { getCities } = useContext(RestaurantContext);
  const [city, setCity] = useState("");

  const classes = useStyles();

  return (
    <div className="input">
      <form
        className={classes.root}
        onSubmit={()=> getCities(city)}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          onChange={(event) => setCity(event.target.value)}
          placeholder="search..."
        />
        <Button type="submit" size="small" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;


