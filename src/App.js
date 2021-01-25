import "./App.css";
import Home from "./components/Home";
import { RestaurantContextProvider } from "./context/RestaurantContext";
import Nav from "./components/Nav";
import RestaurantList from "./components/RestaurantList";
import Restaurant from "./components/Restaurant";
import CitiesList from "./components/CitiesList";

import { BrowserRouter,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Nav />
        <RestaurantContextProvider>
       
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/restaurantList" exact component={RestaurantList}></Route>
          <Route path="/restaurant" exact component={Restaurant}></Route>
          <Route path="/citiesList" exact component={CitiesList}></Route>
         
        </Switch>
        </RestaurantContextProvider>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
