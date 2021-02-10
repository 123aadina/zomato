import "./App.css";
import React from "react";
import Home from "./components/Home";
import { RestaurantContextProvider } from "./context/RestaurantContext";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";
import RestaurantList from "./components/RestaurantList";
import Restaurant from "./components/Restaurant";
import CitiesList from "./components/CitiesList";
import ChatRoom from "./components/ChatRoom";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import NavTabs from "./components/NavTabs";
import { ChatContextProvider } from "./context/ChatContext";


function App() {
 
   return (
     <div className="App">
     <BrowserRouter>
     <AuthProvider>
       <RestaurantContextProvider> 
         <ChatContextProvider>
         <NavTabs/>
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
           <Route path="/chatRoom" exact component={ChatRoom}></Route>
         </Switch>
         </ChatContextProvider>
       </RestaurantContextProvider>
     </AuthProvider>
   </BrowserRouter>
 </div>
);
}
export default App;