import "./App.css";
import Home from "./components/Home";
import { RestaurantContextProvider } from "./context/RestaurantContext";
import { AuthProvider } from "./context/AuthContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import RestaurantList from "./components/RestaurantList";
import Restaurant from "./components/Restaurant";
import CitiesList from "./components/CitiesList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Nav />
          <RestaurantContextProvider>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route
                path="/restaurantList"
                exact
                component={RestaurantList}
              ></Route>
              <Route path="/restaurant" exact component={Restaurant}></Route>
              <Route path="/citiesList" exact component={CitiesList}></Route>
              <Route path="/register" exact component={Register}></Route>
              <Route path="/login" exact component={Login}></Route>
            </Switch>
          </RestaurantContextProvider>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
