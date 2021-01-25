import "./App.css";
import Home from "./components/Home";
import { RestaurantContextProvider } from "./context/RestaurantContext";
import Nav from "./components/Nav";
import RestaurantList from "./components/RestaurantList";
import Restaurant from "./components/Restaurant";
import CitiesList from "./components/CitiesList";

import { HashRouter,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RestaurantContextProvider>
        <HashRouter>
        <Nav />
        <Switch>
          <Route path="/" exact components={Home}></Route>
          <Route path="/restaurantList" components={RestaurantList}></Route>
          <Route path="/restaurant" components={Restaurant}></Route>
          <Route path="/citiesList" components={CitiesList}></Route>
         
        </Switch>
        </HashRouter>
      </RestaurantContextProvider>
    </div>
  );
}

export default App;
