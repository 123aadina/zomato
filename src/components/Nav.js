import React from "react";
import { Link ,NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>zomato</h1>
      <ul className="nav-link">
        <li>
          <Link to="/" className="text-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/citiesList" className="text-secondary">
            CitiesList
          </Link>
        </li>
        <li>
          <Link to="/restaurantList" className="text-secondary">
            RestaurantList
          </Link>
        </li>
        <li>
          <Link to="/restaurant" className="text-secondary">
            Restaurant
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-secondary">
          Register
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-secondary">
          Login
          </Link>
        </li>
      </ul>
    </nav>
    
   
  );
};

export default Nav;

/**<nav class="nav-wrapper grey darken-3"></nav> 
 * {/* <nav>
      <h1>zomato</h1>
      <ul className="nav-link">
        <li>
          <Link to="/" className="text-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/citiesList" className="text-secondary">
            CitiesList
          </Link>
        </li>
        <li>
          <Link to="/restaurantList" className="text-secondary">
            RestaurantList
          </Link>
        </li>
        <li>
          <Link to="/restaurant" className="text-secondary">
            Restaurant
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-secondary">
          Register
          </Link>
        </li>
      </ul>
    </nav>
    
    
    
    
    
    
    
    
     <nav className="nav-wrapper grey light-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          hallo
        </Link>
        <ul className="right">
        <li>
          <NavLink to="/" >
            Home
          </NavLink>
        </li>
        </ul>

      </div>
    </nav>*/
