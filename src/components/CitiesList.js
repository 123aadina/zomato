import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { RestaurantContext } from "../context/RestaurantContext";
import {List, Grid, Typography, ListItem, ListItemText} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';






const CitiesList = () => {
  const { cities, handleCitySelect, pending } = useContext(RestaurantContext);


   
  
  return (
    <div>
        {/* {pending && <h2>Loading...</h2>}
          <h1>CitiesList</h1>
           
              <ListItemText primary={city.name} />
             <Button onClick={() => handleCitySelect(city)}>Select</Button>
            </div> */}
      
      {pending && <h2>Loading...</h2>}
      <h1>CitiesList</h1>
      {cities &&
        cities.map((city) => {
          return (
            <div className="city">
              <div className="cityName">{city.name}</div>
              <Button onClick={() => handleCitySelect(city)}>Select</Button>
            </div>
          );
        })} 
   </div> 
  );
};

export default CitiesList;



/**
 * const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
 * 
 *  const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
 */