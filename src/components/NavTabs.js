import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link, useHistory} from "react-router-dom"
import { RestaurantContext } from "../context/RestaurantContext";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function NavTabs() {

   let history = useHistory()
   console.log(history,"history")
   let tab 
   switch(history.location.pathname.toLowerCase()) {
     case "/": tab= 0
     break;
     case "/citiesList": tab= 1
     break;
     case "/restaurantList": tab= 2
     break;
     case "/restaurant": tab= 3
     break;
     case "/register": tab= 4
     break;
     case "/login": tab= 5
     break;
     case "/chatRoom": tab= 6
     break;
     default:tab = 0
   }

  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(tab);
  const { cities, handleCitySelect, pending } = useContext(RestaurantContext);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
 
return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={selectedTab}  onChange={handleChange}>
          <Tab value="selectedTab" component={Link} to='/' label= "Home"  />
          <Tab component={Link} to='/citiesList' label="CitiesList"  />
          <Tab component={Link} to='/restaurantList' label="RestaurantList"  />
          <Tab component={Link} to='/restaurant' label="Restaurants"  />
          <Tab component={Link} to='/register' label="Register"/>
          <Tab component={Link} to='/login' label="Login"  />
          <Tab component={Link} to='/chatRoom' label="ChatRoom"  />
        </Tabs>
      </AppBar>
    </div>
  );
};