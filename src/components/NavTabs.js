import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Home from "./Home";
import RestaurantList from "./RestaurantList";
import Restaurant from "./Restaurant";
import CitiesList from "./CitiesList";
import Register from "./Register";
import Login from "./Login";
import {Link} from "react-router-dom"
import { RestaurantContext } from "../context/RestaurantContext";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";


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
   switch(history.location.pathname) {
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
          <Tab value="selectedTab" component={Link} to='/' label= "Home"  value={0}/>
          <Tab component={Link} to='/citiesList' label="CitiesList"  value={1} />
          <Tab component={Link} to='/restaurantList' label="RestaurantList" value={2} />
          <Tab component={Link} to='/restaurant' label="Restaurants"  value={3}/>
          <Tab component={Link} to='/register' label="Register" value={4}/>
          <Tab component={Link} to='/login' label="Login"  value={5}/>
        </Tabs>
      </AppBar>
     
    </div>
  );
}



/**disabled={cities.length === 0 ? true : false} */
/* componentWillMount() {

  let urlPath = window.location.pathname;
  let currentTab = urlPath.split('/').pop();
  // you can add more validations here
  this.setState({ activeTab: currentTab || 'default' });

} */


 {/* {selectedTab === 0 && <Home/>}
      {selectedTab === 1 && <CitiesList/>}
      {selectedTab === 2 && <RestaurantList/>}
      {selectedTab === 3 && <Restaurant />}
      {selectedTab === 4 && <Register/>}
      {selectedTab === 5 && <Login />} */}


      /**
       *   const handleCallToRouter = (value) => {
   history.push(value);
  setSelectedTab(value);
  }
 
   
  return (
   <Tabs
     value={history.location.pathname}
     onChange={handleCallToRouter}
     >
     <Tab
       label="Home"
       value="/"
     >
     <div>
        <Home />
     </div>
     </Tab>
     <Tab
       label="CitiesList"
       value="/CitiesList"
         >
       <div>
         <CitiesList />
       </div>
     </Tab>
   </Tabs>           
 )
}
       */